import React from 'react'
import Bool from './charts/Bool'
import Categories from './charts/Categories'
import './Chart.css'

const Charts = props =>
  <div className="chart">
    <Bool sites={props.sites} />
    <Categories sites={props.sites} />
  </div>

export default Charts
