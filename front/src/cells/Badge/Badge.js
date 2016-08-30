import React, { Component } from 'react'


class Badge extends Component {
  render() {
      return (
        <div className={this.props.status + ' badge'}>
          <div className="content">
            <i className={'icon fa ' + this.props.icon}></i>
            <span>{this.props.text}</span>
          </div>
        </div>
      )
  }
}

export default Badge
