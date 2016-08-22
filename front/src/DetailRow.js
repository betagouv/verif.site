import React, { Component } from 'react'

class DetailRow extends Component {
  render() {
    return (
      <tr className={this.props.visible ? 'visible' : 'hidden'}>
        <th colSpan="6">
          <h2>TLS</h2>
          <dl>
            <dt>Taille de la clé</dt>
            <dd>{this.props.visible && this.props.site.tls["Key Size"]}</dd>

            <dt>Type de la clé</dt>
            <dd>{this.props.visible && this.props.site.tls["Key Type"]}</dd>

            <dt>Algorithmes</dt>
            <dd>{this.props.visible && this.props.site.tls["Signature Algorithm"]}</dd>
          </dl>
        </th>
      </tr>
    );
  }
}

export default DetailRow
