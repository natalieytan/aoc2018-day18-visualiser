import React, { Component } from 'react'

class GridTypeSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "display-text",
      groundText: "#CCCCCC",
      lumberText: "#333333",
      treeText: "#666666",
      groundColor: "#ecd9a3",
      lumberColor: "#51371c",
      treeColor: "#008f00",
      groundEmoji: "〰️" ,
      lumberEmoji : "⛺️",
      treeEmoji:  "🌲"
    }
    this.handleDisplayChange = this.handleDisplayChange.bind(this)
    this.handleCustomChange = this.handleCustomChange.bind(this)
    this.handleEmoji = this.handleEmoji.bind(this)
  }

  handleEmoji(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleDisplayChange(event) {
    this.setState({display: event.target.value});
  }

  handleCustomChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }


  render() {
    let selection;
    if (this.state.display === "display-text") {
      selection = (
      <form>
      <label htmlFor="ground-text">Ground: </label>
      <input type="color" value={this.state.groundText} id="ground-text" name="groundText" onChange={this.handleCustomChange}/> 
      <label htmlFor="tree-text">Tree: </label>
      <input type="color" value={this.state.treeText} id="tree-text" name="treeText" onChange={this.handleCustomChange}/> 
      <label htmlFor="lumber-text">Lumber: </label>
      <input type="color" value={this.state.lumberText} id="lumber-text" name="lumberText" onChange={this.handleCustomChange}/>
      </form>
      )
    } else if (this.state.display === "display-emoji") {
      selection = (
      <form>
        <select value={this.state.groundEmoji} id="ground-emoji" name="groundEmoji" onChange={this.handleEmoji}>
          <option value="〰️">〰️</option>
          <option value="➰">➰</option>
          <option value="➿">➿</option>
          <option value="🌀">🌀</option>
          <option value="❗️">❗️</option>
          <option value="❌">❌</option>
          <option value="💩">💩</option>
          <option value="☁️">☁️</option>
          <option value="❤️">❤️</option>
          <option value="⚠️">⚠️</option>
        </select>

        <select value={this.state.treeEmoji} id="tree-emoji" name="treeEmoji" onChange={this.handleEmoji}>
          <option value="🌲">🌲</option>
          <option value="🎄">🎄</option>
          <option value="🌳">🌳</option>
          <option value="🌴">🌴</option>
          <option value="🌵">🌵</option>
          <option value="🌱">🌱</option>
          <option value="🍄">🍄</option>
          <option value="🌸">🌸</option>
          <option value="🌻">🌻</option>
          <option value="🦖 ">🦖 </option>
        </select>

        <select value={this.state.lumberEmoji} id="lumber-emoji" name="lumberEmoji" onChange={this.handleEmoji}>
          <option value="⛺️">⛺️</option>
          <option value="🏕">🏕</option>
          <option value="🚧 ">🚧 </option>
          <option value="🗿">🗿</option>
          <option value="🚀">🚀</option>
          <option value="🌱">🌱</option>
          <option value="🔥">🔥</option>
          <option value="💥">💥</option>
          <option value="⭐️">⭐️</option>
          <option value="⚡️ ">⚡️ </option>
        </select>
      </form>)
    } else if(this.state.display === "display-solid-color") {
      selection = (
        <form>
        <label htmlFor="ground-text">Ground: </label>
        <input type="color" value={this.state.groundColor} id="ground-color" name="groundColor" onChange={this.handleCustomChange}/> 
        <label htmlFor="tree-color">Tree: </label>
        <input type="color" value={this.state.treeColor} id="tree-color" name="treeColor" onChange={this.handleCustomChange}/> 
        <label htmlFor="lumber-color">Lumber: </label>
        <input type="color" value={this.state.lumberColor} id="lumber-color" name="lumberColor" onChange={this.handleCustomChange}/>
        </form>
        )
    }
    
    return (
      <div>
        <form className="display-options">
          <input type="radio" id="display-text" name="display" value="display-text" 
                  checked={this.state.display === 'display-text' } onChange={this.handleDisplayChange} />
          <label htmlFor="display-text">Text</label>

          <input type="radio" id="display-emoji" name="display" value="display-emoji" 
                checked={this.state.display === 'display-emoji' } onChange={this.handleDisplayChange} />
          <label htmlFor="display-emoji">Emoji</label>

          <input type="radio" id="display-solid-color" name="display" value="display-solid-color" 
                checked={this.state.display === 'display-solid-color'} onChange={this.handleDisplayChange} />
          <label htmlFor="display-solid-color">Solid Color</label>
        </form>

        {selection}
        
      </div>
    )

  }
}

export default GridTypeSelector