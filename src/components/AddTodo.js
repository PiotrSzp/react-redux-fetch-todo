import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addTodo } from "../actions/todoActions";

class AddTodo extends Component {
    state = {
        title: ''
    };

    onChange = e => {
        e.preventDefault();
        this.setState({
            title: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();

        if (this.state.title.trim().length > 0) {
            this.props.addTodo(this.state.title)
        }

        this.setState({
            title: ''
        })
    };

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <input
                    type='text'
                    name='title'
                    placeholder='Add task...'
                    value={ this.state.title }
                    onChange={ this.onChange }
                />
                <button
                    type='submit'
                    name='submit'
                >
                    ADD TASK
                </button>
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default connect(null, { addTodo })(AddTodo);