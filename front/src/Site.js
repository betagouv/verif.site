import React, { Component } from 'react'
import HeaderRow from './HeaderRow'
import DetailRow from './DetailRow'

class Site extends Component {
  constructor(props) {
    super(props)
    this.state = {isDetailVisible: false}
    this.onArrowClick = this.onArrowClick.bind(this)
  }

  onArrowClick() {
    this.setState({isDetailVisible: !this.state.isDetailVisible})
  }

  render() {
    return (
      <tbody>
        <HeaderRow site={this.props.site} onArrowClick={this.onArrowClick} filterAdministration={this.props.filterAdministration}/>
        <DetailRow site={this.props.site} visible={this.state.isDetailVisible}/>
      </tbody>
    );
  }
}

export default Site
