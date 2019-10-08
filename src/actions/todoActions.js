import { FETCH_TODOS, ADD_TODO, TOGGLE_TODO, DEL_TODO } from "./types";

export const fetchTodos = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => res.json())
        .then(todos => dispatch({
            type: FETCH_TODOS,
            payload: todos
        }))
};

export const addTodo = todoTitle => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ title: todoTitle })
    })
        .then(res => res.json())
        .then(todo => dispatch({
            type: ADD_TODO,
            payload: todo
        }))
};

export const toggleTodo = todo => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${ todo.id }`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ completed: !todo.completed })
    })
        .then(res => res.json())
        .then(todo => dispatch({
            type: TOGGLE_TODO,
            payload: todo.id
        }))
};

export const delTodo = todoId => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${ todoId }`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(todo => dispatch({
            type: DEL_TODO,
            payload: todoId
        }))
};
