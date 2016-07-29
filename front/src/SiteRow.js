import React, { Component } from 'react'

class SiteRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr>
        <td>{ this.props.site.inspect.Domain }</td>
        <td>{ this.props.site.inspect["Valid HTTPS"] ? "HTTPS valide" : "HTTPS non valide"}</td>
      </tr>
    );
  }
}

export default SiteRow
