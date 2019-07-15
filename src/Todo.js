import React from "react";
import { ListItem,List,  IconButton, Checkbox } from '@material-ui/core';

export default props => (
  <List className="tabtask" style={{ display: "flex", justifyContent: "center" }}>
    <ListItem style={{textDecoration: props.todo.complete ? "line-through" : "" }} onClick={props.toggleComplete}>
      {props.todo.text}
    </ListItem>
    <Checkbox tabIndex={-1}  disable ripple onClick={props.toggleComplete} />
    <button className="deletebutton" onClick={props.onDelete}>x</button>
  </List>
);