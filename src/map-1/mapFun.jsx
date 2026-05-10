import React from 'react'
import List from './List';
function MapFun() {
    const skills = ["react", "javaScript", "angular","vue","react native" ] ;
  return (
    <div>
        <ul>
            {
                skills.map((ele,index)=> <List key={index} name={ele}></List>)
            }
        </ul>
    </div>
  )
}

export default MapFun;   