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
          <a className="content" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] }>
            <span>
              Note SSL&nbsp;: <br/>
            <span className="grade" >{ this.props.tls["Grade"] }</span>
            </span>
            <i className="icon fa fa-4x fa-check-circle"></i>
          </a>
        </td>
      )

    } else if(this.props.tls["Grade"].includes('B') || this.props.tls["Grade"].includes('C')) {
      return (
        <td className="warning">
          <a className="content" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] }>
            <span>
              Note SSL&nbsp;: <br/>
              <span className="grade" >{ this.props.tls["Grade"] }</span>
            </span>
            <i className="icon fa fa-4x fa-exclamation-triangle"></i>
          </a>
        </td>
      )
    } else {
      return (
        <td className="invalid">
          <a className="content" href={ 'https://www.ssllabs.com/ssltest/analyze.html?d=' + this.props.tls['Domain'] }>
            <span>
              Note SSL&nbsp;: <br/>
              <span className="grade" >{ this.props.tls["Grade"] }</span>
            </span>
            <i className="icon fa fa-4x fa-times-circle"></i>
          </a>
        </td>
      )
    }
  }
}

export default HttpsGrade
