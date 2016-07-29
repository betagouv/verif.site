import React, { Component } from 'react'

class SiteRow extends Component {
  render() {
    return (
      <tr>
        <td className="site-title">{ this.props.site.inspect.Domain }</td>
        <td>{ this.props.site.inspect["Valid HTTPS"] ? "HTTPS valide" : "HTTPS non valide"}</td>
      </tr>
    );
  }
}

export default SiteRow
