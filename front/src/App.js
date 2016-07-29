import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.getAnalytics();
  }

  getAnalytics() {
    return fetch(`https://raw.githubusercontent.com/sgmap/sites/master/data/sites.json`)
      .then((response) => response.json())
      .then((json) => {
        const analytics = Object.keys(json).map((key) => {
          return json[key]
        })
        this.setState({analytics})
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    return (
      <div>
        <table className="site-table">
          <tbody>
            <tr>
              <td className="site-title">{this.state ? this.state.analytics[0].inspect.Domain : 'Loading'}</td>
            </tr>
          </tbody>
        </table>

        <pre>
          {this.state ? JSON.stringify(this.state.analytics) : 'Loading'}
        </pre>
      </div>
    );
  }
}

export default App
