import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { Pie } from 'react-chartjs'
import Chart from '../src/Chart'

const arraySite = require('./resources/array-sites')

describe("Chart", () => {

  it('should have a chart class', () => {
    const wrapper = shallow(<Chart sites={arraySite} query='' />)
    expect(wrapper.find('.chart')).to.have.length(1)
  })

  it('should render Pie Component', (done) => {
    const wrapper = mount(<Chart sites={arraySite} query='' />)

    setTimeout(() => {
      expect(wrapper.find(Pie)).to.equal(true)
      done()
    }, 10)
  })

  it('should not render Pie Component if no site is displayed', (done) => {
    const wrapper = mount(<Chart sites={arraySite} query='nobody' />)

    setTimeout(() => {
      expect(wrapper.find(Pie)).to.equal(false)
      done()
    }, 10)
  })

})
