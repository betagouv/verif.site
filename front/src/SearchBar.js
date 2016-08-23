import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div className="search-bar">
        <input
          autoFocus={focus}
          type="text"
          placeholder="Recherche"
          value={this.props.text}
          onChange={this.onChange} />
      </div>
    );
  }
}

export default SearchBar
