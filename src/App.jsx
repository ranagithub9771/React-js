
//!componet :- 
// 1. class based component
// 2. function based component

// fbc - a normal plain  javascript function which which returns some piece of jsx is known as function based components.

// import Card from "./Topic-1/Card";
import MapFun from "./map-1/mapFun";
import Parent from "./Topic-4/Parent";
import ChangeValue from "./Topic-6-state/ChageValue";
const App = ()=>{

    return <div className="App-Parent">
     {/* <Parent/> */}
     {/* <MapFun/> */}
     <ChangeValue/>
    </div>
     
}

export default App;