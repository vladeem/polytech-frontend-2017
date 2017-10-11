import React, { Component } from 'react';

class Commit extends Component{
	render () { 
		return 	<div>
					<p>Hello {this.state.name}</p>
				</div>;
	}
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			secondName: props.secondName
		};
	}
	componentDidMount() {
		this.interval = setInterval(function(src){src.setState({name:src.state.secondName, secondName: src.state.name});} , 1500,this);
		
	}
}
export default Commit;