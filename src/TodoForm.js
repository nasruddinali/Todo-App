import React from 'react';
//import { threadId } from 'worker_threads';
//import generate from '@babel/generator';
import shortId from 'shortid'

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
             <h1>Todo Application</h1>
            <form onSubmit={this.handleSubmit}>
                
                <input 
                name = 'text'
                value={this.state.text} 
                onChange={this.handleChange}
                placeholder="todos...."
                />
                <button onClick={this.handleSubmit}>Add to do</button>
            </form>
            </div>
    
            );
    }
}