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

  describe("HTTPS percent", () => {
  it('should 100% https', (done) => {
    const wrapper = mount(<Chart sites={arraySite} />)

    setTimeout(() => {
      expect(wrapper.instance().getStats()).to.equal(100)
      done()
    }, 10)
  })

  it('should 50% https', (done) => {
    let newArraySite = arraySite
    newArraySite[0].inspect["Valid HTTPS"] = false
    const wrapper = mount(<Chart sites={newArraySite} />)

    setTimeout(() => {
      expect(wrapper.instance().getStats()).to.equal(50)
      done()
    }, 10)
  })

  it('should 0% https', (done) => {
    let newArraySite = arraySite
    newArraySite.forEach(function(element) {
      element.inspect["Valid HTTPS"] = false
    })
    const wrapper = mount(<Chart sites={newArraySite} />)

    setTimeout(() => {
      expect(wrapper.instance().getStats()).to.equal(0)
      done()
    }, 10)
  })
})

  describe("Canvas render", () => {
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

})
