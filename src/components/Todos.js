import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from "../actions/todoActions";
import PropTypes from 'prop-types';

import ToDoItem from "./ToDoItem";

class Todos extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.newTodo) {
            this.props.todos.unshift(nextProps.newTodo)
        }
        return !!nextProps.newTodo;
    }

    render() {
        return (
            <section className={ 'todos' }>
                { this.props.todos.map(todo =>
                    <ToDoItem
                        key={ todo.id }
                        todo={ todo }
                    />) }
            </section>
        );
    }
}

// PROP TYPES
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    fetchTodos: PropTypes.func.isRequired,
    newTodo: PropTypes.object,
};

// MAP STATE TO PROPS
const mapStateToProps = state => ({
    todos: state.todos.todosList,
    newTodo: state.todos.newTodo,
});

export default connect(mapStateToProps, { fetchTodos })(Todos);