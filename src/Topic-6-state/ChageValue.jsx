import { useState } from "react";

const ChangeValue = () =>{
 let FruitName = "Mango";

 let [Fruit, setFruit] = useState(FruitName);
 let [count, setCount] = useState(0);

  let handleName =()=>{
    setFruit("Apple");
  }
 
    return <>
    <h1>Change Value Using State in React </h1>
    <h2>Fruit Name is : {Fruit}</h2>
    <h2>Counter : {count}</h2>

    <button  onClick={handleName}>Click here to hange Fruit Name</button>
    <br />
    <br />
    <button  onClick={()=>setCount(count+1)}>Click here to Increse Value </button>

    </>
}

export default ChangeValue;