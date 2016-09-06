import React from 'react'
import Bool from './Bool/Bool'
import Categories from './Categories/Categories'
import './Charts.css'

const Charts = props =>
  <div className="charts">
    <Bool sites={props.sites} property="Valid HTTPS" title="des sites utilisent HTTPS" label="HTTPS" />
    <Categories sites={props.sites} />
  </div>

export default Charts
