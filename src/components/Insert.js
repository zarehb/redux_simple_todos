import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Insert extends Component {

	add() {
		if(this.props.newItem) this.props.addItem();
		this._input.focus();
	}


	render() {
		return <div><input ref={ (c) => { if(c) {c.focus(); this._input = c;} } } value={this.props.newItem } onChange={ (event) => { this.props.updateNew(event.currentTarget.value) } } /><button onClick={this.add.bind(this)} >Add</button></div>
	}
}

const {addItem,updateNew} = actions ;

const mapStateToProps = function({todo}) {
	let {newItem} = todo;
	return {newItem};

}

export default connect(mapStateToProps, {updateNew,addItem} )(Insert);