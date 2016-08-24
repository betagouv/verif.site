import React, { Component } from 'react'

class DetailCategory extends Component {
  render() {
    const data = this.props.data
    const dict = this.props.dict
    const entries = []

    Object.keys(dict).forEach((categoryKey) => {
      if(data[categoryKey] !== undefined) {
        Object.keys(dict[categoryKey]).forEach((dataKey) => {
          if(data[categoryKey][dataKey] !== undefined && data[categoryKey][dataKey] !== "") {
            entries.push(<dt key={categoryKey + dataKey + 'dt'}>{ dict[categoryKey][dataKey] }</dt>)
            entries.push(<dd key={categoryKey + dataKey + 'dd'}>{ parser(data[categoryKey][dataKey]) }</dd>)
          }
        })
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
export default DetailCategory

export { parser }
