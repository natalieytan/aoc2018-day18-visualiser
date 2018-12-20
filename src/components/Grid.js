import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      width: 0,
      grid: null,
      trees: [],
      lumber: [],
      ground: [],
      counter: 0,
      running: false,
      looper: null,
    }
    this.pause = this.pause.bind(this)
    this.play = this.play.bind(this)
    this.everyMinute = this.everyMinute.bind(this)
    this.resetInput = this.resetInput.bind(this)
  }

  componentDidMount() {
    const grid = this.props.input.split(/\n/).map(row => row.split(''))
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
    this.setState({counter: 0, grid, lumber, ground, trees, running: true, height: grid.length, width: grid[0].length})
    const looper = setInterval(this.everyMinute, 80) 
    this.setState({looper})
  }

  componentWillUnmount() {
    clearInterval(this.state.looper)
  }


  resetInput(){
    clearInterval(this.state.looper)
    this.setState({counter: 0, input: null, height: 0, width: 0, grid: null, trees: [], lumber: [], ground: [], running: false})
    this.props.handleInputChange(null)
  }

  pause(){
    clearInterval(this.state.looper)
    this.setState({running: false})
  }

  play(){
    const looper = setInterval(this.everyMinute, 80) 
    this.setState({looper, running: true})
  }

  has_surrounding_trees(surrounds, n, grid) {
    let count = 0
    for (const coord of surrounds) {
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

  
  render() {
    let playPause;
    if (this.state.running) {
      playPause = <button onClick={this.pause}> Pause </button>
    } else {
      playPause = <button onClick={this.play}> Play </button>
    }

    let items;
    if (this.state.grid) {
      if (this.props.display === "display-text") {
        items = this.state.grid.map(
          (row, j)  => <tr key={j}> {row.map( (e, i) => <td key={i} style={{color: this.props.customText[e]}}>{e}</td> )}</tr>)
      } else if (this.props.display === "display-emoji") {
        items = this.state.grid.map(
          (row, j)  => <tr key={j}> {row.map( (e, i) => <td key={i}><span>{this.props.customEmoji[e]}</span></td> )}</tr>)
      } else if (this.props.display === "display-solid-color") {
        items = this.state.grid.map(
          (row, j) => <tr key={j}> {row.map( (e, i) => <td key={i} style={{background: this.props.customColor[e]}}></td> )}</tr>)
      }
    }
    return (
      <div className="grid">
      <div className="flex-apart">
        <div className="grid-control">
          <button onClick={this.resetInput}> Reset Input </button>
          {playPause}
        </div>
        <p className="counter">{this.state.counter}</p>
      </div>
      <table>
        <tbody>
        {items}
        </tbody>
      </table>
      </div>
  )}

}
export default Grid