import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import MiniBadges from './MiniBadges';
import HttpsEnforce from '../cells/https/Enforce/Enforce'
import Http2 from '../cells/Http2/Http2'

const arraySite = require('../../test/resources/array-sites')

describe("MiniBadges", () => {

  it('should contain HttpsEnforce', () => {
    const wrapper = shallow(<MiniBadges key={0} site={arraySite[0]}/>)

    expect(wrapper.find(HttpsEnforce)).to.have.length(1)
  })

  it('should contain Http2', () => {
    const wrapper = shallow(<MiniBadges key={0} site={arraySite[0]}/>)

    expect(wrapper.find(Http2)).to.have.length(1)
  })
})
