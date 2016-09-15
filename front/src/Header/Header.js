import React, { Component } from 'react'
import Charts from '../Charts/Charts'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div id="header">
        <h1>Le Vérificateur</h1>
        <span>Estimer la sécurité et la performance des sites web de l'administration</span>

        <Charts sites={this.props.sites} />
      </div>
    )
  }
}

export default Header
