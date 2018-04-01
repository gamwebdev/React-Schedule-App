import React from 'react';
import ReactDOM from 'react-dom';
import CreateTodoList from './create-todos.js';
import TodosList from './todos-list';

const todos = [
	{
		task:'make React Tut',
		isCompleted: true
	},
	{
		task:'eat dinner',
		isCompleted: true
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
				<CreateTodoList create={this.create.bind(this)}/>
				<br />
				<TodosList todos={this.state.todos} />
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

}