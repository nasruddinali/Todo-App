import React from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';


//import { threadId } from 'worker_threads';
/*
1. add todo
2. display todos
3. cross off todo
4. Show the number of active one
5. filter all/active/comlete
6. delete todo
7. delete all complete
8. Button to toggle All
*/
export default class TodoList extends React.Component {
    state = {
        todos: [],
        todoToShow: "all",
        toggleAllComplete: true
    };
    addTodo = (todo) => {
        if(todo.toString().length > 0 )  {
        this.setState({
            todos: [ ...this.state.todos, todo]
        })
    }
}

    
    toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };
  updateTodoToShow = (s) => {
      this.setState({
          todoToShow: s,
      })

  }
  handleDleteTodo = (id) => {
      this.setState({
          todos: this.state.todos.filter(todo => todo.id !== id)
      });
  };

  removeAllTodoThatAreComplete = () => {
    this.setState({
        todos: this.state.todos.filter(todo => !todo.complete)
    });
};
/*
toggleAllTodo = () => {
    this.setState({
        todos: this.state.todos.filter(todo => todo.complete = !todo.complete)
    
    })
}
*/ 
    
        render() {
            let todos = []
            if(this.state.todoToShow ==='all') {
                todos = this.state.todos;
            }
            else if(this.state.todoToShow ==='active') {
                todos = this.state.todos.filter(todo => !todo.complete);
            }
            else if(this.state.todoToShow ==='complete') {
                todos = this.state.todos.filter(todo => todo.complete);
            }
            //Everything from here has been changed
        return(
            <div>
            
                <TodoForm onSubmit={this.addTodo}/>
                {todos.map( todo =>(
                        <Todo 
                            key={todo.id.toString()}  
                            toggleComplete={() => this.toggleComplete(todo.id)}
                            onDelete={() => this.handleDleteTodo(todo.id)}
                            todo = {todo} />
                ))}
                <div>todos left : {this.state.todos.filter(todo => !todo.complete).length}</div>
                <div>
                    <div>
                    <button 
                        onClick={() => this.updateTodoToShow("all")}>all</button></div>
                    <div>
                    <button 
                        onClick={() => this.updateTodoToShow("active")}>active</button></div>
                    <div>
                    <button 
                        onClick={() => this.updateTodoToShow("complete")}>complete</button></div>
                </div>
                {this.state.todos.some(todo => todo.complete) ? (
                <div>
                    
                    <button onClick={this.removeAllTodoThatAreComplete}>
                            remove all complete todos
                    </button>
                
                </div> ): null}
                <div>
                    <button onClick={() => 
                        this.setState({
                            todos: this.state.todos.map(todo =>({
                                ...todo,
                                complete: this.state.toggleAllComplete
                            })),
                            toggleAllComplete: !this.state.toggleAllComplete
                        })
                    }
                    >
                        toggle All complete: {`${this.state.toggleAllComplete}`}</button>
                </div>           
            </div>
        )
    }
}