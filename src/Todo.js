import React from "react";

export default props => (
  <div className="tabtask" >
    <list style={{textDecoration: props.todo.complete ? "line-through" : "" }} onClick={props.toggleComplete}>
      {props.todo.text}
    </list>
    <input type="checkbox" className= "checkbox"  onClick={props.toggleComplete} />
    <button className="deletebutton" onClick={props.onDelete}>x</button>
  </div>
);