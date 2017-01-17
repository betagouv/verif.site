import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AllTimeUptimeRatio from './AllTimeUptimeRatio'
import UptimeRatio from '../UptimeRatio/UptimeRatio'

describe('AllTimeUptimeRatio', () => {
  describe('when there is no data', () => {
    it('contains empty cell', () => {
      const monitor = {
      }

      const expectedValue = <UptimeRatio ratio={undefined} title='Uptime' />
      expect(shallow(<AllTimeUptimeRatio monitor={monitor}/>).contains(expectedValue)).to.equal(true)
    })
  })

  describe('when there a 100% ratio', () => {
    const monitor = {
      alltimeuptimeratio: 100
    }

    it("contains a valid badge", () => {
      const expectedValue = <UptimeRatio ratio={100} title='Uptime' />
      expect(shallow(<AllTimeUptimeRatio monitor={monitor} />).contains(expectedValue)).to.equal(true)
    })
  })
})
