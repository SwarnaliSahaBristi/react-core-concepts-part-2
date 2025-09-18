import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";

function App() {
  const handleClick = () => {
    alert("button clicked");
  };
  const handleAdd = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleAdd(10)}>Click Me 2</button>
    </>
  );
}

export default App;
