export const ADD_TODO = 'ADD_TODO';

export const UPDATE_NEW = 'UPDATE_NEW';

export const DONE = 'DONE';

export const GET_TODOS = 'GET_TODOS';

export function addItem() {
	return {type: ADD_TODO}
}

export function updateNew(item) {
	return {type: UPDATE_NEW, payload: item}
}

export function done(index) {
	return {type: DONE, payload: index}
}
export function getTodos(data) {
	return {type: GET_TODOS, payload: data}
}