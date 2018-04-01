import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component{



	/*
		renderItems(){
		return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} task={todo.task} isCompleted={todo.isCompleted} toggleTask={this.props.toggleTask}/>);
	}
	*/

	renderItems(){
		const props = _.omit(this.props, 'todos');
		return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} task={todo.task} isCompleted={todo.isCompleted} {...props}/>);
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