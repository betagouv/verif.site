import React from 'react'
import Bool from './charts/Bool'
import Categories from './charts/Categories'
import './Charts.css'

const Charts = props =>
  <div className="charts">
    <Bool sites={props.sites} property="Valid HTTPS" label="utilisent HTTPS" />
    <Bool sites={props.sites} property="Strictly Forces HTTPS" label="forcent l'utilisation de HTTPS" />
    <Categories sites={props.sites} />
  </div>

export default Charts
