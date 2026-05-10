import React from 'react'
import Child from './Child'

function Parent() {
    const user = "Rohit sharma";
  return (
  <div className='parent-component'>
<h2>parent component</h2>
     <Child user={user}>
     <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium et laudantium ad perspiciatis sint iste cumque, quo earum est velit, eveniet sapiente totam, numquam odio beatae ut voluptates porro repellendus.</p>
     </Child>
     </div>
     )
}

export default Parent