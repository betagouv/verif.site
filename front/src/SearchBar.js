import React, { Component } from 'react'
import Content from './Content'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(e) {
    this.setState({text: e.target.value.toLowerCase()})
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Recherche"
            value={this.state.text}
            onChange={this.handleTextChange} />
        </div>
        <div className="content">
          <Content search={this.state.text} />
        </div>
      </div>
    );
  }
}

export default SearchBar
