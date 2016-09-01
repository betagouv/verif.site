import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import BigBadge from '../../BigBadge/BigBadge'
import UptimeRatio from './UptimeRatio'


describe('UptimeRatio', () => {
  describe('when there a 100% ratio', () => {
    it('contains a valid badge', () => {
      const expectedValue = <BigBadge status='valid' text='100%' title='Uptime (7j)'/>
      expect(shallow(<UptimeRatio ratio={100} title='Uptime (7j)'/>).contains(expectedValue)).to.equal(true)
    })
  })

  describe('returns the correct status', () => {
    it('is valid', () => {
      const wrapper = shallow(<UptimeRatio />)
      expect(wrapper.instance().getStatus(100)).to.equal('valid')
    })

    it('is warning', () => {
      const wrapper = shallow(<UptimeRatio />)
      expect(wrapper.instance().getStatus(99.4)).to.equal('warning')
    })

    it('is invalid', () => {
      const wrapper = shallow(<UptimeRatio />)
      expect(wrapper.instance().getStatus(15.4)).to.equal('invalid')
    })
  })
})
