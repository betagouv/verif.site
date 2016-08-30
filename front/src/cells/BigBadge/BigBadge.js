import React, { Component } from 'react'

class BigBadge extends Component {
  render() {
      return (
        <div className={this.props.status + ' badge'}>
          <div className="content">
            <div className="column">
              <div>{this.props.title}</div>
              <div className="big">{ this.props.text }</div>
            </div>
          </div>
        </div>
      )
  }
}

export default BigBadge
