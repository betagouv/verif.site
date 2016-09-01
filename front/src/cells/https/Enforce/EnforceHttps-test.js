import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Badge from '../../Badge/Badge'
import HttpsEnforce from './Enforce'


describe("HttpsEnforce", () => {
  describe("when there is no data", () => {
    it("contains empty cell", () => {
      const expectedValue = <td className="unknown"><span>HTTPS Inconnu</span></td>
      expect(shallow(<HttpsEnforce />).contains(expectedValue)).to.equal(true)
    })
  })

  describe("when there a valid HTTPS", () => {
    const inspect = {}
    inspect["Strictly Forces HTTPS"] = true
    it("contains a valid badge", () => {
      const expectedValue = <Badge status='valid' text="Force HTTPS" icon='fa-check'/>
      expect(shallow(<HttpsEnforce inspect={inspect} />).contains(expectedValue)).to.equal(true)
    })
  })

  describe("when there a invalid HTTPS", () => {
    const inspect = {}
    inspect["Strictly Forces HTTPS"] = false
    it("contains a invalid badge", () => {
      const expectedValue = <Badge status='warning' text="Ne force pas HTTPS" icon='fa-exclamation-triangle'/>
      expect(shallow(<HttpsEnforce inspect={inspect} />).contains(expectedValue)).to.equal(true)
    })
  })
})
