import React, { Component } from 'react'
import { Pie } from 'react-chartjs'

class ChartBool extends Component {
  constructor(props) {
    super(props)
    this.getStats = this.getStats.bind(this)
  }

  getStats() {
    const httpsSites = this.props.sites.filter( site => site.inspect[this.props.property])

    return Math.floor((httpsSites.length / this.props.sites.length) * 100)
  }

  render() {
    const result = this.getStats()
    const data = [
      {
        value: result,
        color: "#569a6f",
        label: this.props.label
      },
      {
        value: 100 - result,
        color: "#FFFFFF",
        label: "Autre"
      }
    ]

    let chart
    if (result >= 0) {
      chart =
      <div>
        <Pie data={data} />
        <h4>{result}% {this.props.title}</h4>
      </div>
    }

    return (
        <div className='chart'>
          {chart}
        </div>
      )
  }
}

export default ChartBool
