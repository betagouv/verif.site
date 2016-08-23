import React, { Component } from 'react'
import HttpsValid from './cells/https/Valid'
import HttpsGrade from './cells/https/Grade'
import HttpsEnforce from './cells/https/Enforce'
import HttpsDate from './cells/https/Date'
import Http2 from './cells/Http2'
import './HeaderRow.css'

class HeaderRow extends Component {
  render() {
    return (
      <tr>
        <td className="show-details" onClick={this.props.onArrowClick}>
          <button onClick={this.props.onArrowClick}>+</button>
        </td>
        <th id={ this.props.site.inspect.Domain }>
          <a href={ this.props.site.inspect.Canonical }>{ this.props.site.inspect.Domain }</a>
          <a className="anchor" href={ '#' + this.props.site.inspect.Domain }><i className="fa fa-link" aria-hidden="true"></i></a>
          <div className="administration">{ this.props.site.meta.Administration }</div>
        </th>
        <HttpsValid inspect={this.props.site.inspect} />
        <HttpsEnforce inspect={this.props.site.inspect} />
        <HttpsGrade tls={this.props.site.tls} />
        <Http2 tls={this.props.site.tls} />
        <HttpsDate sslyze={this.props.site.sslyze} />
      </tr>
    );
  }
}

export default HeaderRow
