import React, { Component } from 'react';

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

    onClick = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })
    };

    render() {
        return (
            <form>
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
                    onClick={ this.onClick }
                >
                    ADD TASK
                </button>
            </form>
        );
    }
}

export default AddTodo;