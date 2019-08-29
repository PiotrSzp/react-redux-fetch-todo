import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
    toggleComplete = (e) => {
        e.preventDefault();
        this.props.toggleComplete(this.props.todo.id)
    };

    render() {
        return (
            <div className={ this.props.todo.completed ? 'todo-item completed' : 'todo-item' } onClick={this.toggleComplete}>
                <p>{ this.props.todo.title }</p>
            </div>
        );
    }
}


// PROP TYPES
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default ToDoItem;