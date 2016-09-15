import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div className="search">
        <div className="icon">
          <i className="fa fa-search"></i>
        </div>
        <div className="search-bar">
          <input
            autoFocus
            type="text"
            placeholder="Recherche"
            value={this.props.query}
            onChange={this.onChange} />
        </div>
      </div>
    )
  }
}

export default SearchBar
