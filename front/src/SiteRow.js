import React, { Component } from 'react'
import HttpsValid from './cells/https/Valid'
import HttpsGrade from './cells/https/Grade'
import HttpsEnforce from './cells/https/Enforce'
import Http2 from './cells/Http2'

class SiteRow extends Component {
  render() {
    return (
      <tr>
        <th>
          <a href={ this.props.site.inspect.Canonical }>{ this.props.site.inspect.Domain }</a>
          <div className="administration">{ this.props.site.meta.Administration }</div>
        </th>
        <HttpsValid inspect={this.props.site.inspect} />
        <HttpsEnforce inspect={this.props.site.inspect} />
        <HttpsGrade tls={this.props.site.tls} />
        <Http2 tls={this.props.site.tls} />
      </tr>
    );
  }
}

export default SiteRow