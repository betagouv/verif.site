import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import BigBadge from '../src/cells/BigBadge'
import CustomUptimeRatio from '../src/cells/CustomUptimeRatio'
import AllTimeUptimeRatio from '../src/cells/AllTimeUptimeRatio'

describe("CustomUptimeRatio", () => {
  describe("when there is no data", () => {
    it("contains empty cell", () => {
      const monitor = {
      }

      const expectedValue = <td className="unknown"></td>
      expect(shallow(<CustomUptimeRatio monitor={monitor}/>).contains(expectedValue)).to.equal(true)
    })
  })

  describe("when there a 100% ratio", () => {
    const monitor = {
      customuptimeratio: 100
    }

    it("contains a valid badge", () => {
      const expectedValue = <BigBadge status='valid' text='100%' title='Uptime (7j)'/>
      expect(shallow(<CustomUptimeRatio monitor={monitor} />).contains(expectedValue)).to.equal(true)
    })
  })
})

describe("AllTimeUptimeRatio", () => {
  describe("when there is no data", () => {
    it("contains empty cell", () => {
      const monitor = {
      }

      const expectedValue = <td className="unknown"></td>
      expect(shallow(<AllTimeUptimeRatio monitor={monitor}/>).contains(expectedValue)).to.equal(true)
    })
  })

  describe("when there a 100% ratio", () => {
    const monitor = {
      alltimeuptimeratio: 100
    }

    it("contains a valid badge", () => {
      const expectedValue = <BigBadge status='valid' text='100%' title='Uptime'/>
      expect(shallow(<AllTimeUptimeRatio monitor={monitor} />).contains(expectedValue)).to.equal(true)
    })
  })
})
