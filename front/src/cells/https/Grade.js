import React, { Component } from 'react'



class HttpsGrade extends Component {
  render() {
    if(!this.props.tls) {
      return (
        <td className="unknwon"><span></span></td>
      )
    }

    if(this.props.tls["Grade"].includes('A')) {
      return (
        <td className="valid">
          <div className="content">
            <span>Note SSL Lab</span>
            <a className="icon grade" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] }>{ this.props.tls["Grade"] }</a>
          </div>
        </td>
      )

    } else if(this.props.tls["Grade"].includes('B') || this.props.tls["Grade"].includes('C')) {
      return (
        <td className="warning">
          <div className="content">
            <span>Note SSL Lab</span>
            <a className="icon grade" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] }>{ this.props.tls["Grade"] }</a>
          </div>
        </td>
      )
    } else {
      return (
        <td className="invalid">
          <div className="content">
            <span>Note SSL Lab</span>
            <a className="icon grade" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] }>{ this.props.tls["Grade"] }</a>
          </div>
        </td>
      )
    }
  }
}

export default HttpsGrade
