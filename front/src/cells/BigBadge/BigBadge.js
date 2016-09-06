import React, { Component } from 'react'
import './BigBadge.css'

class BigBadge extends Component {
  render() {
      return (
        <div className={this.props.status + ' badge'}>
          <span className="big">{ this.props.text }</span>
          <span>{this.props.title}</span>
        </div>
      )
  }
}

export default BigBadge
