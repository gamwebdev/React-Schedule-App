import React from 'react';
import ReactDOM from 'react-dom';

export default class CreateTodoList extends React.Component{


		render(){
				
				return(
					<form onSubmit = {this.handleCreate.bind(this)}>
						<input type="text" placeholder="what u want to crate!" ref="createInput"/>
						<button> Create</button>		
					</form>
				);
		}

		handleCreate(e){
			e.preventDefault();
			this.props.create(this.refs.createInput.value);
		}
}	