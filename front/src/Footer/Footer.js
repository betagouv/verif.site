import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          Fait avec ♥ par&nbsp;<a href="https://beta.gouv.fr/" rel="noopener" target="_blank">l'Incubateur de services numériques</a>
        </p>
        <ul>
          <li>L'API&nbsp;<a href="https://www.ssllabs.com/">Qualys SSL Labs</a>&nbsp;est utilisée pour calculer les notes SSL.</li>
          <li>Icône de cadenas par <a href="https://design.google.com/icons/#ic_lock_outline">Google</a>.</li>
        </ul>
        <p><small>Dernière mise à jour le {this.props.lastUpdated}.</small></p>
      </footer>
    )
  }
}

export default Footer
