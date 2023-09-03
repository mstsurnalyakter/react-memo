import React, { useState }  from "react";

import './App.css'
import Message from "./components/Message";

function App() {

  const [count , setCount] = useState(0)

  console.log("app rendering")

  return (
    <>


      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count => count + 1)}>Increment</button>
      <Message number={count}  />
    </>
  );
}

export default App;
