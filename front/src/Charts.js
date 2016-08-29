import React from 'react'
import Chart from './charts/Chart'
import Chart2 from './charts/Chart2'
import './Chart.css'

const Charts = props =>
  <div className="chart">
    <Chart sites={props.sites} />
    <Chart2 sites={props.sites} />
  </div>

export default Charts
