import React, { Component } from 'react'


class Badge extends Component {
  render() {
      return (
        <td className={this.props.status}>
          <div className="content">
            <span>{this.props.text}</span>
            <i className={'icon fa fa-4x ' + this.props.icon}></i>
          </div>
        </td>
      )
  }
}

export default Badge
