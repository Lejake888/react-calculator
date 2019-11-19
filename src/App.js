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

  equalPress = () => {
    let total = this.state.screen.toString();
    let calc = total.replace(/,/g, '')
    let sum = eval(calc)
    console.log(sum)
    this.setState({screen: sum})

    // total.join()
  }

  clearPress = () => {
    this.setState({screen: []})
  }

  numberPress = (number) => {
    if (this.state.screen) {
      this.setState({screen: [number]})
    }
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
      <div className = "website">
        <h1>Calculator</h1>
          <div className = "calculator">
            <div className = "screen">
              <p>{this.state.screen}</p>
            </div>
              <div className = "allButtons"> 
                  <div className = "mainButtons">
                    <button id = "zero" onClick = {() => this.numberPress(0)}>0</button>
                    <button id = "one" onClick = {() => this.numberPress(1)}>1</button>
                    <button id = "two" onClick = {() => this.numberPress(2)}>2</button>
                    <button id = "three" onClick = {() => this.numberPress(3)}>3</button>
                    <button id = "four" onClick = {() => this.numberPress(4)}>4</button>
                    <button id = "five" onClick = {() => this.numberPress(5)}>5</button>
                    <button id = "six" onClick = {() => this.numberPress(6)}>6</button>
                    <button id = "seven" onClick = {() => this.numberPress(7)}>7</button>
                    <button id = "eight" onClick = {() => this.numberPress(8)}>8</button>
                    <button id = "nine" onClick = {() => this.numberPress(9)}>9</button>
                    <button id = "clear" onClick = {() => this.clearPress()}>Clear</button>
                  </div>
                  <div className = "operatorButtons">
                    <button id = "divide" onClick = {() => this.numberPress("/")}>÷</button>
                    <button id = "multiply" onClick = {() => this.numberPress("*")}>*</button>
                    <button id = "minus" onClick = {() => this.numberPress("-")}>-</button>
                    <button id = "add" onClick = {() => this.numberPress("+")}>+</button>
                    <button id = "leftbracket" onClick = {() => this.numberPress("(")}>(</button>
                    <button id = "rightbracket" onClick = {() => this.numberPress(")")}>)</button>
                    <button id = "decimal" onClick = {() => this.numberPress(".")}>.</button>

                    <button id = "equal" onClick = {() => this.equalPress("=")}>=</button> 
                  </div>
              </div>
          </div>
        </div>
      )
  }
}

export default App;