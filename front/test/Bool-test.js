import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import Bool from '../src/charts/Bool'

const arraySite = require('./resources/array-sites')

describe("Bool", () => {

  it('should have a chart class', () => {
    const wrapper = shallow(<Bool sites={arraySite} property="Valid HTTPS" label="label" />)

    expect(wrapper.hasClass('chart')).to.equal(true)
  })

  describe("Canvas render", () => {
    it('should render canvas', (done) => {
      const wrapper = mount(<Bool sites={arraySite} property="Valid HTTPS" label="label" />)

      setTimeout(() => {
        expect(wrapper.find('canvas')).to.have.length(1)
        done()
      }, 10)
    })

    it('should display label', (done) => {
      const wrapper = mount(<Bool sites={arraySite} property="Valid HTTPS" label="label" />)

      setTimeout(() => {
        expect(wrapper.text()).to.contain(wrapper.props().label)
        done()
      }, 10)
    })

    it('should display percent', (done) => {
      const wrapper = mount(<Bool sites={arraySite} property="Valid HTTPS" label="label" />)

      setTimeout(() => {
        expect(wrapper.text()).to.contain('100%')
        done()
      }, 10)
    })

    it('should not render canvas if no site is displayed', (done) => {
      const wrapper = mount(<Bool sites={[]} property="Valid HTTPS" label="label"/>)

      setTimeout(() => {
        expect(wrapper.find('canvas')).to.have.length(0)
        done()
      }, 10)
    })

  })

  describe("HTTPS percent", () => {
    it('should 100% https', (done) => {
      const wrapper = mount(<Bool sites={arraySite} property="Valid HTTPS" label="label" />)

      setTimeout(() => {
        expect(wrapper.instance().getStats()).to.equal(100)
        expect(wrapper.text()).to.contain('100%')
        done()
      }, 10)
    })

    it('should 50% https', (done) => {
      let newArraySite = arraySite
      newArraySite[0].inspect["Valid HTTPS"] = false
      const wrapper = mount(<Bool sites={newArraySite} property="Valid HTTPS" label="label" />)

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
      const wrapper = mount(<Bool sites={newArraySite} property="Valid HTTPS" label="label" />)

      setTimeout(() => {
        expect(wrapper.instance().getStats()).to.equal(0)
        done()
      }, 10)
    })
  })

})
