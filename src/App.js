import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    numbers : 
    [
      {zero: 0},
      {one: 1},
      {two: 2},
      {three: 3},
      {four: 4},
      {five: 5},
      {six: 6},
      {seven: 7},
      {eight: 8},
      {nine: 9},
    ],
    screen: [],
}

  EqualPress = () => {
    let total = 5;
    console.log(total)
    this.setState({screen: [total]})
  }

  ClearPress = () => {
    this.setState({screen: []})
  }

  NumberPress = (number) => {
    const list = this.state.screen.concat(number);
    this.setState({screen: list})
    // console.log(this.state.screen)
    return {
      list,
      value: '',
    }
  }

  render () {
    return(
      <div className = "calculator">
        <div className = "screen">
          <p>{this.state.screen}</p>
        </div>
          <div className = "allButtons"> 
              <div className = "mainButtons">
                <button id = "zero" onClick = {() => this.NumberPress(0)}>0</button>
                <button id = "one" onClick = {() => this.NumberPress(1)}>1</button>
                <button id = "two" onClick = {() => this.NumberPress(2)}>2</button>
                <button id = "three" onClick = {() => this.NumberPress(3)}>3</button>
                <button id = "four" onClick = {() => this.NumberPress(4)}>4</button>
                <button id = "five" onClick = {() => this.NumberPress(5)}>5</button>
                <button id = "six" onClick = {() => this.NumberPress(6)}>6</button>
                <button id = "seven" onClick = {() => this.NumberPress(7)}>7</button>
                <button id = "eight" onClick = {() => this.NumberPress(8)}>8</button>
                <button id = "nine" onClick = {() => this.NumberPress(9)}>9</button>
                <button id = "clear" onClick = {() => this.ClearPress()}>Clear</button>
              </div>
              <div className = "operatorButtons">
                <button id = "divide" onClick = {() => this.NumberPress("/")}>÷</button>
                <button id = "multiply" onClick = {() => this.NumberPress("*")}>*</button>
                <button id = "minus" onClick = {() => this.NumberPress("-")}>-</button>
                <button id = "add" onClick = {() => this.NumberPress("+")}>+</button>
                <button id = "equal" onClick = {() => this.EqualPress("=")}>=</button>
              </div>
          </div>
      </div>
      )
  }
}

export default App;