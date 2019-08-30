import { FETCH_TODOS, ADD_TODO, TOGGLE_TODO, DEL_TODO } from "../actions/types";

const initialState = {
    todosList: [],
    newTodo: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                todosList: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                newTodo: {
                    ...action.payload,
                    id: Math.random(), //tiny cheat to provide unique-ish id's, because of working with jsonplaceholder
                }
            };
        case TOGGLE_TODO: {
            const newTodosList = state.todosList.map(todo => {
                return {
                    id: todo.id,
                    title: todo.title,
                    completed: todo.id === action.payload ? !todo.completed : todo.completed
                }
            });
            return {
                ...state,
                todosList: newTodosList
            };
        }
        case DEL_TODO: {
            return {
                ...state,
                todosList: state.todosList.filter(todo => {
                    return todo.id !== action.payload;
                })
            };
        }
        default:
            return state;
    }
}