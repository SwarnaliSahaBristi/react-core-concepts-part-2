import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";
import User from "./user";
import Friends from "./friends";
import { Suspense } from "react";

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const fetchFriends = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();
}
function App() {
  const friendPromise = fetchFriends()
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
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUsers={fetchUsers}></User>
      </Suspense> */}

      <Suspense fallback={<h4>Friends are coming soon...</h4>}>
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleAdd(10)}>Click Me 2</button>
    </>
  );
}

export default App;
