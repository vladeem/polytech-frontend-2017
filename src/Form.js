import React, { Component } from 'react';
class NumberForm extends Component{
	render() {
		return( <form style={{marginTop:'50px'}}>
				
				<input type='text' onChange={this.handleChange}/>
				<input type='button' onClick={this.clickHandle} value='Угадать'/>
				</form>)
	}
	constructor(props) {
		super(props);
		this.state={
			value:''
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.clickHandle = this.clickHandle.bind(this);
	}
	handleChange(event) {
        this.setState({
            value: event.target.value
        });
		
        //this.props.onChange(event.target.value);
    }
	clickHandle(){
		this.props.addGuess(this.state.value);
	}

}
	  
export default NumberForm;