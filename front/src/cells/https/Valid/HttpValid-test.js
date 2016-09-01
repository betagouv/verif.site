import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Badge from '../../Badge/Badge'
import HttpsValid from './Valid'


describe("HttpsValid", () => {
  describe("when there a valid HTTPS", () => {
    const inspect = {}
    inspect["Valid HTTPS"] = true
    it("contains a valid badge", () => {
      const expectedValue = <Badge status='valid' text='HTTPS valide' icon='fa-check'/>
      expect(shallow(<HttpsValid inspect={inspect} />).contains(expectedValue)).to.equal(true)
    })
  })

  describe("when there a invalid HTTPS", () => {
    const inspect = {}
    inspect["Valid HTTPS"] = false
    it("contains a invalid badge", () => {
      const expectedValue = <Badge status='invalid' text='HTTPS non valide' icon='fa-exclamation-triangle'/>
      expect(shallow(<HttpsValid inspect={inspect} />).contains(expectedValue)).to.equal(true)
    })
  })
})
