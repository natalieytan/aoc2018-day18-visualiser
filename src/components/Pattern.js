import React, { Component } from 'react';
import Grid from './components/Grid'
import InputForm from './components/InputForm'

class Pattern extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      width: 0,
      input: null,
      grid: null,
      trees: [],
      lumber: [],
      ground: [],
      counter: 0,
      running: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillUnmount() {
    clearInterval(this.looper)
  }

  has_surrounding_trees(surrounds, n, grid) {
    let count = 0
    for (const coord of surrounds) {
      //console.log(this.state.grid[coord.y][coord.x])
      if (grid[coord.y][coord.x] === "|") {count += 1}
      if (count >= n) { return true }
    }
    return false
  }

  has_surrounding_lumber(surrounds, n, grid) {
    let count = 0    
    for (const coord of surrounds) {
      if (grid[coord.y][coord.x] === "#") {count += 1}
      if (count >= n) { return true }
    }
    return false
  }

  get_surrounding(coords) {
    const surrounds = []
    const x = coords.x
    const y = coords.y
    if (y > 0) { surrounds.push({y: y - 1, x: x}) }
    if (y > 0 && x < (this.state.width - 1)) { surrounds.push({y: y - 1, x: x + 1}) }
    if (x < (this.state.width - 1)) { surrounds.push({y, x: x + 1}) }
    if (y < (this.state.height - 1) && x < (this.state.width - 1)) { surrounds.push({y: y + 1, x: x + 1}) }
    if (y < (this.state.height - 1)) { surrounds.push({y: y + 1, x}) }
    if (y <  (this.state.height - 1) && x > 0) { surrounds.push({y: y + 1, x: x - 1}) }
    if (x > 0) { surrounds.push({y, x: x - 1}) }
    if (y > 0 && x > 0) { surrounds.push({y: y - 1, x: x - 1}) }
    return surrounds
  }

  everyMinute() {
    this.setState((prevState, _) => {
      const new_grid = new Array(prevState.height).fill(null).map(x => new Array(prevState.width).fill('.'))
      const new_trees = []
      const new_lumber =[]
      const new_ground = []
      for (const coord of prevState.ground) {
        const surrounds = this.get_surrounding(coord)
        if (this.has_surrounding_trees(surrounds, 3, prevState.grid)) {
          new_trees.push(coord)
          new_grid[coord.y][coord.x] = '|'
        } else {
          new_ground.push(coord)
        }
      }
      for (const coord of prevState.trees) {
        const surrounds = this.get_surrounding(coord)
        if (this.has_surrounding_lumber(surrounds, 3, prevState.grid)) {
          new_lumber.push(coord)
          new_grid[coord.y][coord.x] = '#'
        } else {
          new_trees.push(coord)
          new_grid[coord.y][coord.x] = '|'
        }
      }
  
     for (const coord of prevState.lumber) {
      const surrounds = this.get_surrounding(coord, prevState.grid)
       if (this.has_surrounding_lumber(surrounds, 1, prevState.grid) && this.has_surrounding_trees(surrounds, 1, prevState.grid)) {
         new_lumber.push(coord)
         new_grid[coord.y][coord.x] = "#"
       } else {
         new_ground.push(coord)
       }
     }

      return { counter: prevState.counter + 1,
        trees: new_trees,
        lumber: new_lumber,
        ground: new_ground,
        grid: new_grid }
    })
  }

  playIt(){
    this.everyMinute()
  }

  handleInputChange(input) {
    const grid = input.split(/\n/).map(row => row.split(''))
    const trees = []
    const lumber = []
    const ground = []
    for (const [y, row] of grid.entries()) {
      for (const [x, symbol] of row.entries()) {
        if (symbol === "|") {
          trees.push({x, y})
        }
        else if (symbol === "#") {
          lumber.push({x, y})
        }
        else if (symbol === ".") {
          ground.push({x, y})
        }
      }
    }
    this.setState({counter: 0, input, grid, lumber, ground, trees, running: true, height: grid.length, width: grid[0].length})
    this.looper();
  }

  looper = () => setInterval(() => this.playIt(), 80) 
  
  render() {
    return (
      <div className="App">
        <InputForm  
          onInputChange={this.handleInputChange}
        />
        <Grid grid={this.state.grid}/> 

        <form>
        <input type="color" value="#000000"/>
        <input type="color" value="#00FF00"/>
        <input type="color" value="#FF0000"/>
        </form>
        <h1> { this.state.counter } </h1>
      </div>
    );
  }
}

export default App;
