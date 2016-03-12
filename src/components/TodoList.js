import React,{Component} from 'react';
import {connect} from 'react-redux';
import {done, getTodos} from '../actions';
import Axios from 'axios';

class TodoList extends Component {

	componentDidMount() {
		var req = Axios.get('http://private-638e4f-todos17.apiary-mock.com/todos');
		this.props.getTodos(req);
	}

	renderItems() {
		if(this.props.todos) 
			return this.props.todos.map((todo,index) => 
				<li key={index} >{todo} <a onClick={() => this.props.done(index)}>[done]</a></li>);
		else return '';
	}

	render() {
		return <ul>{this.renderItems()}</ul>
	}
}

let mapStateToProps = function(state) {
	return {todos: state.todo.todos}

}

export default connect(mapStateToProps,{done, getTodos})(TodoList);