import React from "react";
import { ListItem, IconButton, Checkbox } from '@material-ui/core';

export default props => (
  <ListItem className="tabtask" >
    <ListItem style={{textDecoration: props.todo.complete ? "line-through" : "" }} onClick={props.toggleComplete}>
      {props.todo.text}
    </ListItem>
    <Checkbox tabIndex={-1} disableRipple  onClick={props.toggleComplete} />
    <button className="deletebutton" onClick={props.onDelete}>x</button>
  </ListItem>
);
