import React from 'react'
import Child from './Child'

function Parent() {
    const user = "Rohit sharma";
  return (
  <div className='parent-component'>
<h2>parent component</h2>
     <Child render={(name)=> <h2> hello {name}</h2>}>
   
     </Child>
     </div>
     )
}

export default Parent