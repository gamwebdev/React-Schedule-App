import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default class CreateTodoList extends React.Component{
		constructor(props) {
		  super(props);
		
		  this.state = {
		  	error:null
		  };
		}


		render(){
				
				return(
					<form onSubmit = {this.handleCreate.bind(this)}>
						<input type="text" placeholder="what u want to crate!" ref="createInput"/>
						<button> Create </button>
						{this.renderError()}		
					</form>
				);
		}

		handleCreate(e){
			e.preventDefault();

			const createInput = this.refs.createInput;
			const task = createInput.value;
			const validateInput = this.validateInput(task);

			if(validateInput != null){
				this.setState({error : validateInput});
				return;
			}
			
			this.setState({error: null});
			this.props.create(task);
			this.refs.createInput.value="";
		}

		validateInput(task){
			if(!task){
				return "please enter a task.";
			}else if(_.find(this.state.todos, todo => todo.task === task)){
				return "Task already exists.";
			}else{
				return null;
			}
		}

		renderError(){
			if(!this.state.error){
				return null;
			}
			return <div style={{color: 'red'}}> {this.state.error}</div>;
		}

}	