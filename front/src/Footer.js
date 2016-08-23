import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div id="footer">
        <p>
          Fait avec ♥ par&nbsp;<a href="https://beta.gouv.fr/" rel="noopener" target="_blank">l'Incubateur de services numériques</a>
        </p>
        <p id="qualys">
          L'API&nbsp;<a href="https://www.ssllabs.com/">Qualys SSL Labs</a>&nbsp;est utilisée pour calculer les notes SSL
        </p>
        <p>Dernière mise à jour le {this.props.lastUpdated}</p>

        <img src="http://stats.data.gouv.fr/piwik.php?idsite=25&rec=1" alt="" />
      </div>
    );
  }
}

export default Header
