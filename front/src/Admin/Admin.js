import React, { Component } from 'react'

class Admin extends Component {
  render() {
    return (
      <tr>
        <th id={ this.props.name }>
          { this.props.name }
        </th>
        <td>
          <a href={ '?q=' + this.props.name }>Nombre de domaines : {this.props.sites.length}</a>
        </td>

      </tr>
    );
  }
}

export default Admin
