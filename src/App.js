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
    render() {
        return (
            <Provider store={ store }>
                <Router>
                    <div className="App">
                        <Header />
                        <Route exact path='/' render={ props => (
                            <>
                                <AddTodo />
                                <Todos />
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