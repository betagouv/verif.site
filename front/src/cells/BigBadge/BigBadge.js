import React, { Component } from 'react'

class BigBadge extends Component {
  render() {
      return (
        <td className={this.props.status}>
          <div className="content">
            <div className="column">
              <div>{this.props.title}</div>
              <div className="big">{ this.props.text }</div>
            </div>
          </div>
        </td>
      )
  }
}

export default BigBadge
