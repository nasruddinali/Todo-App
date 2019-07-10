import React from 'react';

import { ListItem, IconButton, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
export default (props) => (
    <div style={{display: 'flex', justifyContent:'center'}}>
        <ListItem
            
            style={{ textDecoration: props.todo.complete ?'line-through' : ""}}
            onmouseover={"this.style.background='gray';"}
            onmouseout={"this.style.background='white';"}
            onClick={props.toggleComplete}>
            <Checkbox tabIndex={-1} disableRipple />
            {props.todo.text} 
        </ListItem>
        <IconButton 
            aria-label="Delete"
            onClick={props.onDelete}><DeleteIcon/>
        </IconButton>

        

    </div>

    
)
