import React, { Component } from 'react'
import { Pie } from 'react-chartjs'
import './Chart.css'

class Chart extends Component {
  constructor(props) {
    super(props)
    this.getStats = this.getStats.bind(this)
  }

  getStats() {
    const httpsSites = this.props.sites.filter( site => site.inspect["Valid HTTPS"])

    return Math.floor((httpsSites.length / this.props.sites.length) * 100)
  }

  render() {
    const result = this.getStats()
    const data = [
      {
          value: result,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "HTTPS"
      },
      {
          value: 100 - result,
          color: "#FFFFFF",
          highlight: "#FFFFFF",
          label: "HTTP"
      }
    ]

    let chart
    if (result >= 0) {
      chart =
      <div>
        <Pie data={data} />
        <h4>{result}% des sites utilisent HTTPS</h4>
      </div>
    }

    return (
        <div className='chart'>
          {chart}
        </div>
      )
  }
}

export default Chart
