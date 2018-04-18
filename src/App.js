import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import CokeContainer from './components/coke/CokeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CokeContainer/>
      </div>
    );
  }
}

export default App
