import Die from './Die';
import './App.css';

function App() {
  function allNewDice() {
    let newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6));
    }

    console.log(newDice);
  }

  return (
    <main className="App bg-[#F5F5F5] h-[80vh] w-[80vw] md:w-[60vw] max-w-[800px] rounded flex justify-center items-center">
      <div className="dice">
        <Die number={5} />
        <Die number={9} />
        <Die number={7} />
        <Die number={0} />
        <Die number={3} />
        <Die number={5} />
        <Die number={9} />
        <Die number={7} />
        <Die number={0} />
        <Die number={3} />
      </div>
    </main>
  );
}

export default App;
