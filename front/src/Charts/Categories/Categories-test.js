import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import Categories from './Categories'

const arraySite = require('./resources/array-sites')

describe("Categories", () => {
  const wrapper = shallow(<Categories sites={arraySite} />)

  it('should have a chart class', () => {
    expect(wrapper.hasClass('chart')).to.equal(true)
  })

  describe("Canvas render", () => {
    it('should render canvas', (done) => {
      const wrapper = mount(<Categories sites={arraySite} />)

      setTimeout(() => {
        expect(wrapper.find('canvas')).to.have.length(1)
        done()
      }, 10)
    })

    it('should not render canvas if no site is displayed', (done) => {
      const wrapper = mount(<Categories sites={[]} />)

      setTimeout(() => {
        expect(wrapper.find('canvas')).to.have.length(0)
        done()
      }, 10)
    })
  })

  describe("findGrade", () => {
    it('should find grade', () => {
      const grade = 'B'
      const data = [
        {label: 'A'},
        {label: grade},
      ]

      expect(wrapper.instance().findGrade(data, grade)).to.equal(data[1])
    })

    it('should not find grade', () => {
      const grade = 'C'
      const data = [
        {label: 'A'},
        {label: 'B'},
      ]

      expect(wrapper.instance().findGrade(data, grade)).to.be.null
    })
  })

  describe("setData", () => {
    it('should set color attribute', () => {
      const data = [
        {label: 'A', value: 1},
        {label: 'B', value: 2},
      ]

      wrapper.instance().setData(data)
      expect(data[0].color).to.exist
      expect(data[1].color).to.exist
    })

    it('should set color attribute', () => {
      const data = [
        {label: 'X', value: 1}
      ]

      wrapper.instance().setData(data)
      expect(data[0].label).to.equal('Pas de note')
    })
  })

  describe("getStats", () => {
    it("should return an array", () => {
      const result = [
        {label: 'A', value: 50},
        {label: 'C', value: 50}
      ]

      expect(wrapper.instance().getStats()).to.deep.equal(result)
    })
  })

  describe("setColor", () => {
    const green = '#569a6f'
    const yellow = '#efb000'
    const grey = '#DDDDDD'
    const red = '#DA3E52'

    it('should return green', () => {
      expect(wrapper.instance().setColor('A+')).to.equal(green)
      expect(wrapper.instance().setColor('A')).to.equal(green)
      expect(wrapper.instance().setColor('A-')).to.equal(green)
    })

    it('should return yellow', () => {
      expect(wrapper.instance().setColor('B')).to.equal(yellow)
      expect(wrapper.instance().setColor('C')).to.equal(yellow)
    })

    it('should return red', () => {
      expect(wrapper.instance().setColor('T')).to.equal(red)
    })

    it('should return grey', () => {
      expect(wrapper.instance().setColor('X')).to.equal(grey)
    })
  })

})
