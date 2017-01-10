import React, { Component } from 'react'
import { fetchAnalyticsIfNeeded, invalidateAnalytics } from '../../actions'
import Charts from '../Charts/Charts'
import './Header.css'

class Header extends Component {

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(invalidateAnalytics())
    dispatch(fetchAnalyticsIfNeeded())
  }

  render() {
    return (
      <div id="header">
        <h1>Le Vérificateur</h1>
        <span>Estimer la sécurité et la performance des sites web de l'administration</span>

        <div>
          <a href="#"
             onClick={this.handleRefreshClick}>
            Rafraîchir
          </a>
        </div>


        <Charts sites={this.props.sites} />
      </div>
    )
  }
}

export default Header
