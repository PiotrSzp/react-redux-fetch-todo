import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { toggleTodo, delTodo } from "../actions/todoActions";

class ToDoItem extends Component {
    toggleTodo = (e) => {
        e.preventDefault();

        if (typeof this.props.toggleTodo === 'function') {
            this.props.toggleTodo(this.props.todo)
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
                 onClick={ this.toggleTodo }>
                <p>{ this.props.todo.title }</p><i className="far fa-trash-alt" onClick={ this.delTodo } />
            </div>
        );
    }
}


// PROP TYPES
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};

export default connect(null, { toggleTodo, delTodo })(ToDoItem);