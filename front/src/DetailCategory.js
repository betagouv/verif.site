import React, { Component } from 'react'

class DetailCategory extends Component {
  render() {
    const data = this.props.data
    const dict = this.props.dict
    const entries = []
    Object.keys(dict).forEach((key) => {
      if(data[key]) {
        entries.push(<dt>{ dict[key] }</dt>)
        entries.push(<dd>{ parser(data[key]) }</dd>)
      }
    })
    return (
      <dl>
        { entries }
      </dl>
    );
  }
}
function parser(value) {
  if(typeof value === 'boolean') {
    return value ? 'Oui' : 'Non'
  }
  return value
}

export { parser, DetailCategory }
