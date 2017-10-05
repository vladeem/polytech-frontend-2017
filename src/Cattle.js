import React, { Component } from 'react';
import cow from './cow.png';
import bull from './bull.png';
import NumberForm from './Form.js';
class CattleList extends Component{
	render() {
		let helpText = '';
		let dispGen = 'inline-block';
		let dispAns = 'block';
				if (this.state.list.length==0) {
					helpText = <p>Сгенерировано четырехзначное число. <br/>
								Вы должны его угадать, вводя предположения в форму ниже.<br/>
								После введения предположения появится таблица с подсказками.<br/>
								Показанное количество быков обозначает количество цифр, стоящих на своих местах в предположении.<br/>
								Количество коров - сколько цифр было угаданно правильно, но стоит не на своих местах.<br/>
								
								</p>;
					dispGen = 'none';
				} 		
				if (this.state.isLastGuessRigth) dispAns = 'none';
		return(
				
			<div style={{text_align:'center'}}>
			<input type='button' onClick={this.getNewNum} value ='Cгенерировать новое число' style={{display:dispGen}}/>
			<div style={{fontFamily:'aerial', fontSize:'14px'}}>	{helpText}</div>
			<table style={{margin:'0 auto'}}>
			<tbody>
			{this.state.list.map((entry, key) => (
				<tr><td>{entry.number}</td>
				<td><img src={cow} width='35' height='35' alt='корова'></img>:{entry.cowCount} </td>
				<td><img src={bull} width='35' height='35' alt='бык'></img>:{entry.bullCount}</td>
				</tr>
			))}
			</tbody>
			</table>
			<div style={{display:dispAns}}>
				<NumberForm addGuess={this.addGuess}/>
			</div>
			</div>);
}
	
  
	constructor(props) {
		super(props);
		this.state = {
			isLastGuessRight : false,
			list : [],
			currNum:'1010'
			
		};
		this.addElement=props.addElement;
		this.addGuess = this.addGuess.bind(this);
		this.getNewNum = this.getNewNum.bind(this);
		
	}
	
	addGuess(guess){
		if(!this.state.isLastGuessRight){
			if(guess.length==4){
				var res ={number:guess, cowCount:0, bullCount:0, key:'guess'+Date.now() };
				guess = guess.split('');
				
				var currNumCopy = this.state.currNum.split('');
				var i = 0;
				var j = 0;
				while(i<guess.length){
					if(guess[i]==currNumCopy[i]){
						res.bullCount+=1;
						guess.splice(i,1);
						currNumCopy.splice(i,1);
					}
					else i++;
				}
				if(guess.length==0) this.state.isLastGuessRigth = true;
				outer:
				for(i=0; i< guess.length;i++)
				{
					for(j=0;j<currNumCopy.length; j++){
						if(guess[i]==currNumCopy[j]) {
							currNumCopy.splice(j,1);
							
							res.cowCount+=1;
							continue outer;
						}
					}
				}
				this.state.list.push(res);
				this.forceUpdate();
			}
		}
	}
	getNewNum(){
		this.state.isLastGuessRigth = false;
		this.state.list =[];
		var num = '';
		num+=''+(Math.floor(Math.random() * (10 - 1)) + 1);
		for(var i=1; i<4; i++) num+=''+(Math.floor(Math.random() * (10 - 0)) + 0);
		this.state.currNum = num ;
		this.forceUpdate();
		console.log(num);
	}
	componentDidMount() {
		this.getNewNum();
		
	}
}





	  
export default CattleList;
