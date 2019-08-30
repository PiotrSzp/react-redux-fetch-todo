import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

export default combineReducers({
    // 'todos' will contain state defined in todoReducer as object {todosList: [], newTodo: {}}
    todos: todoReducer
})
