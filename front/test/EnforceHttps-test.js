import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Badge from '../src/cells/Badge';
import HttpsEnforce from '../src/cells/https/Enforce';


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
      const expectedValue = <Badge status='valid' text="Force l'utilisation de HTTPS" icon='fa-check-circle'/>
      expect(shallow(<HttpsEnforce inspect={inspect} />).contains(expectedValue)).to.equal(true)
    })
  })

  describe("when there a invalid HTTPS", () => {
    const inspect = {}
    inspect["Strictly Forces HTTPS"] = false
    it("contains a invalid badge", () => {
      const expectedValue = <Badge status='warning' text="Ne force pas l'utilisation de HTTPS" icon='fa-exclamation-triangle'/>
      expect(shallow(<HttpsEnforce inspect={inspect} />).contains(expectedValue)).to.equal(true)
    })
  })
})
