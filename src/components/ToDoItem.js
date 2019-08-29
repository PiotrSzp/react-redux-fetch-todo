import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
    toggleComplete = (e) => {
        e.preventDefault();

        if (typeof this.props.toggleComplete === 'function') {
            this.props.toggleComplete(this.props.todo.id)
        }
    };

    delTodo = e => {
        e.preventDefault();
        e.stopPropagation();
        this.props.delTodo(this.props.todo.id);
    };

    render() {
        return (
            <div className={ this.props.todo.completed ? 'todo-item completed' : 'todo-item' }
                 onClick={ this.toggleComplete }>
                <p>{ this.props.todo.title }</p><p className="far fa-trash-alt" onClick={ this.delTodo }></p>
            </div>
        );
    }
}


// PROP TYPES
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

export default ToDoItem;