import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import BigBadge from '../../BigBadge/BigBadge'
import UptimeRatio from './UptimeRatio'


describe('UptimeRatio', () => {
  describe('when there is no data', () => {
    it('contains empty cell', () => {
      const expectedValue = <td className='unknown'></td>
      expect(shallow(<UptimeRatio />).contains(expectedValue)).to.equal(true)
    })
  })

  describe('when there a 100% ratio', () => {
    it('contains a valid badge', () => {
      const expectedValue = <BigBadge status='valid' text='100%' title='Uptime (7j)'/>
      expect(shallow(<UptimeRatio ratio={100} title='Uptime (7j)'/>).contains(expectedValue)).to.equal(true)
    })
  })
})
