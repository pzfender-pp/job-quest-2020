import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
      firstName: 'John',
      lastName: 'Doe',
      joke: ''
  }

  changedHandler = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();
    fetch(`http://api.icndb.com/jokes/random?firstName=${this.state.firstName}&lastName=${this.state.lastName}`)
      .then(response => response.json())
      .then(data => {
        this.setState({joke: data.value.joke})
      })
    const input = document.querySelectorAll('input');
    input[0].value = '';
    input[1].value= '';
  }

  render() {
    return (
      <div className="App">
        <div className="wraper">
          <header>
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <p>{this.state.joke}</p>
          </header>
          <form onSubmit={this.submitHandler}>
            <input type="text" 
              onChange={this.changedHandler} 
              name='firstName' 
              placeholder="FirstName"
              autoComplete="off"
              className="user-input"/>
            <input type="text" 
              onChange={this.changedHandler} 
              name='lastName' 
              placeholder="LastName"
              autoComplete="off"
              className="user-input"/>
            <button className="btn">Generate Joke</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
