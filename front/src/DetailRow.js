import React, { Component } from 'react'

class DetailRow extends Component {
  render() {
    return (
      <tr className={this.props.visible ? 'visible' : 'hidden'}>
        <th colSpan="5">
          this.props.site.tls
        </th>
      </tr>
    );
  }
}

export default DetailRow
