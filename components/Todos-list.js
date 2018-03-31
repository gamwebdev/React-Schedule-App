import React from 'react';
import ReactDOM from 'react-dom';
import TodosListHeader from './todos-list-header'

export default class TodosList extends React.Component{

	render(){
		console.log(this.props);
		return(
			<table>
				<TodosList-header />
			</table>
		);
	}
}