import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Recherche"
          value={this.props.text}
          onChange={this.props.onChange} />
      </div>
    );
  }
}

export default SearchBar
