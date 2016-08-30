import React, { Component } from 'react'
import HttpsValid from '../cells/https/Valid/Valid'
import HttpsGrade from '../cells/https/Grade/Grade'
import HttpsEnforce from '../cells/https/Enforce/Enforce'
import HttpsDate from '../cells/https/Date/Date'
import Http2 from '../cells/Http2/Http2'
import CustomUptimeRatio from '../cells/uptime/CustomUptimeRatio/CustomUptimeRatio'
import AllTimeUptimeRatio from '../cells/uptime/AllTimeUptimeRatio/AllTimeUptimeRatio'
import './HeaderRow.css'

class HeaderRow extends Component {
  constructor(props) {
    super(props)
    this.onAdministrationClick = this.onAdministrationClick.bind(this)
  }

  onAdministrationClick() {
    this.props.filterAdministration(this.props.site.meta.Administration)
  }

  render() {
    return (
      <tr>
        <td className="show-details" onClick={this.props.onArrowClick}>
          <button onClick={this.props.onArrowClick}>+</button>
        </td>
        <th id={ this.props.site.inspect.Domain }>
          <a href={ this.props.site.inspect.Canonical }>{ this.props.site.inspect.Domain }</a>
          <a className="anchor" href={ '#' + this.props.site.inspect.Domain }><i className="fa fa-link" aria-hidden="true"></i></a>
          <div className="administration"><button className="filter" onClick={this.onAdministrationClick}>{ this.props.site.meta.Administration }</button></div>
        </th>
        <HttpsValid inspect={this.props.site.inspect} />
        <HttpsEnforce inspect={this.props.site.inspect} />
        <HttpsGrade tls={this.props.site.tls} />
        <Http2 tls={this.props.site.tls} />
        <HttpsDate sslyze={this.props.site.sslyze} />
        <CustomUptimeRatio monitor={this.props.monitor} />
        <AllTimeUptimeRatio monitor={this.props.monitor} />
      </tr>
    );
  }
}

export default HeaderRow
