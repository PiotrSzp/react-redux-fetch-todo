import React, { Component, Fragment } from 'react';
import ToDoItem from "./ToDoItem";
import PropTypes from 'prop-types';

class Todos extends Component {



    render() {
        return (
            <div className={'todos'}>
                { this.props.todos.map(todo => <ToDoItem key={ todo.id } todo={ todo } toggleComplete = {this.props.toggleComplete}/>) }
            </div>
        );
    }
}

// PROP TYPES
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default Todos;