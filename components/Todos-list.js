import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component{

	renderItems(){
		return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} task={todo.task} isCompleted={todo.isCompleted}/>);
	}

	render(){
		
		return(
			<table>
				<TodosListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}