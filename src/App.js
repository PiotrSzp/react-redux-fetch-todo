// L I B R A R I E S
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'

// C O M P O N E N T S
import Todos from './components/Todos';


class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Cook dinner',
                completed: false
            },
            {
                id: 2,
                title: 'Foo 2',
                completed: false
            },
            {
                id: 3,
                title: 'Bar 3',
                completed: true
            }
        ]
    };


    toggleComplete = (id) => {
        const todos = this.state.todos.map(todo => {
            return {
                id: todo.id,
                title: todo.title,
                completed: todo.id === id ? !todo.completed : todo.completed
            }
        });
        this.setState({ todos });
    };

    render() {
        return (
            <Provider store={ store }>
                <div className="App">
                    <Todos todos={ this.state.todos } toggleComplete={this.toggleComplete}/>
                </div>
            </Provider>
        );
    }
}

export default App;
