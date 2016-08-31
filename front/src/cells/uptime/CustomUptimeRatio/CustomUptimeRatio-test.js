import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import CustomUptimeRatio from './CustomUptimeRatio'
import UptimeRatio from '../UptimeRatio/UptimeRatio'

describe('CustomUptimeRatio', () => {
  describe('when there is no data', () => {
    it('contains empty cell', () => {
      const monitor = {
      }

      const expectedValue = <UptimeRatio ratio={undefined} title='Uptime (7j)' />
      expect(shallow(<CustomUptimeRatio monitor={monitor}/>).contains(expectedValue)).to.equal(true)
    })
  })

  describe('when there a 100% ratio', () => {
    const monitor = {
      customuptimeratio: 100
    }

    it("contains a valid badge", () => {
      const expectedValue = <UptimeRatio ratio={100} title='Uptime (7j)' />
      expect(shallow(<CustomUptimeRatio monitor={monitor} />).contains(expectedValue)).to.equal(true)
    })
  })
})
