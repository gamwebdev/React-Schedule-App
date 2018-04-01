import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import CreateTodoList from './create-todos.js';
import TodosList from './todos-list';

const todos = [
	{
		task:'play',
		isCompleted: false
	},
	{
		task:'eat dinner',
		isCompleted: false
	}
];

export default class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			todos:todos
		};
	}

	render(){
		return(
			<div>
				<h1> React ToDos App</h1>
				<CreateTodoList todos={this.state.todos} create={this.create.bind(this)}/>
				<br />
				<TodosList todos={this.state.todos} 
						   toggleTask={this.toggleTask.bind(this)}
						   saveTask = {this.saveTask.bind(this)}
						   deleteTask = {this.deleteTask.bind(this)}
				/>
			</div>
		);
	}

	create(task){
		this.state.todos.push({
			task:task,
			isCompleted:false
		});
		this.setState({
			todos:this.state.todos
		});
	}

	toggleTask(task){
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos});
	}

	saveTask(oldTask, newTask){
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		this.setState({ todos: this.state.todos});
	}

	deleteTask(taskToDelete){
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
		this.setState({ todos: this.state.todos});
	}
}