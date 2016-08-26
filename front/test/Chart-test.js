import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import { Pie } from 'react-chartjs'
import Chart from '../src/Chart'

const arraySite = require('./resources/array-sites')

describe.only("Chart", () => {

  it('should have a chart class', () => {
    const wrapper = shallow(<Chart sites={arraySite} />)
    expect(wrapper.find('.chart')).to.have.length(1)
  })

  it('should render Pie Component', (done) => {
    const wrapper = render(<Chart sites={arraySite} />)
    setTimeout(() => {
      expect(wrapper.find('canvas')).to.have.length(1)
      done()
    }, 10)
  })

  it('should not render Pie Component if no site is displayed', (done) => {
    const wrapper = render(<Chart sites={[]} />)

    setTimeout(() => {
      expect(wrapper.find('canvas')).to.have.length(0)
      done()
    }, 10)
  })

})
