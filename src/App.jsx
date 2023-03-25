import { useState, useEffect } from 'react';
import Die from './Die';
import './App.css';

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [gameWin, setGameWin] = useState(false);

  useEffect(() => {
    const win = dice.every(
      (die, index, arr) => die.on && die.value === arr[0].value
    );

    setGameWin(win);

    win ? console.log('You have won the game') : console.log('keep playing');
  }, [dice]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({ id: i, value: Math.ceil(Math.random() * 6), on: false });
    }
    return newDice;
  }

  function pressdOn(e, id) {
    console.log(`you pressed on dice ${id}`);
    setDice((prevDice) => {
      const updatedDice = prevDice.map((die) => {
        if (id === die.id) {
          return { ...die, on: !die.on };
        } else {
          return die;
        }
      });
      return updatedDice;
    });
  }

  function reRoll() {
    setDice((prevState) => {
      const newDice = prevState.map((die) => {
        if (!die.on) {
          return { ...die, value: Math.ceil(Math.random() * 6) };
        } else {
          return die;
        }
      });
      return newDice;
    });
  }

  function resetGame() {
    setDice(allNewDice());
    setGameWin(false);
  }

  const uiDice = dice.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        on={die.on}
        clickedOn={(e) => pressdOn(e, die.id)}
      />
    );
  });

  return (
    <main className="App bg-[#F5F5F5] h-[80vh] w-[80vw] md:w-[60vw] max-w-[800px] rounded flex flex-col justify-center items-center">
      <div className="dice">{uiDice}</div>
      <button
        onClick={gameWin ? resetGame : reRoll}
        className="mt-7 px-4 py-2 rounded-md text-white bg-[#3f4394] hover:bg-[#242970]"
      >
        {gameWin ? 'Play Again' : 'Reroll'}
      </button>
    </main>
  );
}

export default App;
