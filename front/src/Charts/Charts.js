import React from 'react'
import Bool from './Bool/Bool'
import Categories from './Categories/Categories'
import './Charts.css'

const Charts = props =>
  <div className="charts">
    <Bool sites={props.sites} property="Valid HTTPS" label="utilisent HTTPS" />
    <Bool sites={props.sites} property="Strictly Forces HTTPS" label="forcent l'utilisation de HTTPS" />
    <Categories sites={props.sites} />
  </div>

export default Charts
