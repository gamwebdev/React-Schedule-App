import React from 'react';
import ReactDOM from 'react-dom';

export default class TodosListItem extends React.Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isEditing:false
	  };
	}

	ActionsRender(){
		if(this.state.isEditing){
			return(
				<td>
					<button> Save  </button>
					<button onClick = {this.onCancelClick.bind(this)}> Cancel </button>
				</td>	
			);
		}	

		return(
			<td>
				<button onClick={this.onEditClick.bind(this)}> Edit </button>
				<button> Delete </button>
			</td>	
		);
	}

	render(){
		return(
				<tr>
					<td>{this.props.task}</td>
					{this.ActionsRender()}
				</tr>
		);
	}

	onEditClick(){
		this.setState({isEditing : true});
	}

	onCancelClick(){
		this.setState({isEditing:false});
	}
};