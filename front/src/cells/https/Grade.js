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
          <div className="block-left">
            <i className="fa fa-4x fa-check-circle"></i>
          </div>
          <div className="block-right">
            <span>Note SSL Lab : <a className="grade" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] }>{ this.props.tls["Grade"] }</a> </span>
          </div>
        </td>
      )

    } else if(this.props.tls["Grade"].includes('B') || this.props.tls["Grade"].includes('C')) {
      return (
        <td className="warning">
          <div className="block-left">
            <i className="fa fa-4x fa-exclamation-triangle"></i>
          </div>
          <div className="block-right">
            <span>Note SSL Lab : <a className="grade" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] }>{ this.props.tls["Grade"] }</a> </span>
          </div>
        </td>
      )
    } else {
      return (
        <td className="invalid">
          <div className="block-left">
            <i className="fa fa-4x fa-times-circle"></i>
          </div>
          <div className="block-right">
            <span>Note SSL Lab : <a className="grade" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] }>{ this.props.tls["Grade"] }</a> </span>
          </div>
        </td>
      )
    }
  }
}

export default HttpsGrade
