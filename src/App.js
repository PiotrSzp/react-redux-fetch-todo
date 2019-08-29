// L I B R A R I E S
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

// C O M P O N E N T S
import Todos from './components/Todos';
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddTodo from "./components/AddTodo";


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

    // ADD TO-DO FUNC
    addTodo = title => {
        const newTodos = this.state.todos;
        newTodos.unshift({
            id: Math.random(),
            title: title,
            completed: false
        });

        this.setState({
            todos: newTodos
        })
    };

    // DELETE TO-DO FUNC
    delTodo = id => {
        console.log("hi");
        const newTodos = this.state.todos.filter(todo => {
            return todo.id !== id;
        });
        this.setState({
            todos: newTodos
        })
    };

    // TOGGLE COMPLETE TO-DO FUNC
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

    // MAIN APP RENDER AND ROUTING
    render() {
        return (
            <Provider store={ store }>
                <Router>
                    <div className="App">
                        <Header />
                        <Route exact path='/' render={ props => (
                            <>
                                <AddTodo addTodo={ this.addTodo } />
                                <Todos
                                    todos={ this.state.todos }
                                    toggleComplete={ this.toggleComplete }
                                    delTodo={ this.delTodo }
                                />
                            </>
                        ) } />
                        <Route path='/about' component={ About } />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
