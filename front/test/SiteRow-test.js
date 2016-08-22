import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SiteRow from '../src/SiteRow';
import HttpsValid from '../src/cells/https/Valid'
import HttpsGrade from '../src/cells/https/Grade'
import HttpsEnforce from '../src/cells/https/Enforce'
import Http2 from '../src/cells/Http2'
const arraySite = require('./resources/array-sites')

describe("SiteRow", () => {

  it('should contains HttpsValid', () => {
    const wrapper = shallow(<SiteRow key={0} site={arraySite[0]}/>)

    expect(wrapper.find(HttpsValid)).to.have.length(1);
  })

  it('should contains HttpsGrade', () => {
    const wrapper = shallow(<SiteRow key={0} site={arraySite[0]}/>)

    expect(wrapper.find(HttpsGrade)).to.have.length(1);
  })

  it('should contains HttpsEnforce', () => {
    const wrapper = shallow(<SiteRow key={0} site={arraySite[0]}/>)

    expect(wrapper.find(HttpsEnforce)).to.have.length(1);
  })

  it('should contains Http2', () => {
    const wrapper = shallow(<SiteRow key={0} site={arraySite[0]}/>)

    expect(wrapper.find(Http2)).to.have.length(1);
  })
})
