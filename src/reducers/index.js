import {combineReducers} from 'redux';
import {ADD_TODO, UPDATE_NEW, DONE, GET_TODOS} from '../actions';


const initialState = {todos:[], newItem:''};

const todo = function(state = initialState,action = {}) {
	let {type,payload} = action;
	switch(type) {
		case UPDATE_NEW:
			return {...state, newItem: payload}
		case ADD_TODO:
			return {newItem: '', todos: state.todos.slice().concat( state.newItem )}
		break;
		case GET_TODOS:
			return{...state, todos: payload.data}
		case DONE:
			var res = state.todos.slice();
			
			res.splice(payload,1);
			return {...state, todos: res }
		break;
	}

	return state;

}

export default combineReducers({
	todo
});