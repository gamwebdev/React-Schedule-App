import React from 'react';
import ReactDOM from 'react-dom';

export default class TodosListHeader extends React.Component{
	render(){
		return(
			<thead>
				<tr>
					<th>Tasks</th>
					<th>Action</th>
				</tr>
			</thead>
		);
	}
}