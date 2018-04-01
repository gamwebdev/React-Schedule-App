import React from 'react';
import ReactDOM from 'react-dom';

export default class CreateTodoList extends React.Component{


		render(){
				
				return(
					<form>
						<input type="text" placeholder="what u want to crate!"/>
						<button> Create</button>		
					</form>
				);
		}
}	