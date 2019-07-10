import React from 'react';
//import { threadId } from 'worker_threads';
//import generate from '@babel/generator';
//Hello cheking git 
import TextField from '@material-ui/core/TextField';
import shortId from 'shortid'
import { Typography } from '@material-ui/core';

export default class TodoForm extends React.Component {
    state = {
        text: ""
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
                id: shortId.generate(),
                text: this.state.text,
                complete: false,
            })
            this.setState({
                text: ''
            })
    }
    render() {
        return(
            <div>
                <Typography component="h1" variant="h2">
                    Todos
                </Typography>
            <form onSubmit={this.handleSubmit}>
                
                <TextField
                name = 'text'
                value={this.state.text} 
                onChange={this.handleChange}
                placeholder="todos...."
                 autoFocus={true} />
                <button onClick={this.handleSubmit}>Add to do</button>
            </form>
            </div>
    
            );
    }
}