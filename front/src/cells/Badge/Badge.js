import React, { Component } from 'react'
import './Badge.css'

class Badge extends Component {
  render() {
      return (
        <div className={this.props.status + ' badge'}>
          <span className="big"><i className={'icon fa ' + this.props.icon}></i></span>
          <span>{this.props.text}</span>
        </div>
      )
  }
}

export default Badge
