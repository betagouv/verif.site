import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import Chart from '../src/Chart'

const arraySite = require('./resources/array-sites')

describe("Chart", () => {

  it('should have a chart class', () => {
    const wrapper = shallow(<Chart sites={arraySite} />)
    expect(wrapper.find('.chart')).to.have.length(1)
  })

  it('should render canvas', (done) => {
    const wrapper = mount(<Chart sites={arraySite} />)

    setTimeout(() => {
      expect(wrapper.find('canvas')).to.have.length(1)
      done()
    }, 10)
  })

  it('should not render canvas if no site is displayed', (done) => {
    const wrapper = mount(<Chart sites={[]} />)

    setTimeout(() => {
      expect(wrapper.find('canvas')).to.have.length(0)
      done()
    }, 10)
  })

})
