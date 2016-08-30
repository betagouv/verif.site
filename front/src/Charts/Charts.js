import React from 'react'
import Bool from './Bool/Bool'
import Categories from './Categories/Categories'
import './Charts.css'

const Charts = props =>
  <div className="charts">
    <Bool sites={props.sites} property="Valid HTTPS" title="utilisent HTTPS" label="HTTPS" />
    <Bool sites={props.sites} property="Strictly Forces HTTPS" title="forcent l'utilisation de HTTPS" label="Force HTTPS" />
    <Categories sites={props.sites} />
  </div>

export default Charts
