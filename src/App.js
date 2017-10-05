import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CattleList from './Cattle.js';

class App extends Component {
  render() {
    return (
      <div className="App" style={{border:'2px solid black',width:'60%',margin:'0 auto', padding:'25px'}}>
			<div></div>
           <CattleList/>
			
      </div>
    );
  }
  constructor(props) {
	super(props);
	

  }
  

  
}

export default App;
