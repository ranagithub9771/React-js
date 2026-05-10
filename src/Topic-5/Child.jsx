import React from "react";

function Child(render) {
  return (
    <div id="child-component">
      {/* <h2> {props.Child} </h2> */}
      {render("Rohit Sharama")}
    </div>
  );
}

export default Child;
