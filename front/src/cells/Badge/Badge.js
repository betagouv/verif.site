import React, { Component } from 'react'


class Badge extends Component {
  render() {
      return (
        <td className={this.props.status}>
          <div className="content">
            <i className={'icon fa ' + this.props.icon}></i>
            <span>{this.props.text}</span>
          </div>
        </td>
      )
  }
}

export default Badge
