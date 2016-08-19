import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Content from '../src/Content';
import SiteRow from '../src/SiteRow'
const arraySite = require('./resources/array-sites')

describe("Content", () => {

  it("show sites row", () => {
    const wrapper = mount(<Content sites={arraySite} />)

    expect(wrapper.contains(<SiteRow key={0} site={arraySite[0]} />)).to.equal(true)
    expect(wrapper.find('th')).to.have.length(2)
  })

  it('Should have 1 rows', () => {
    const wrapper = mount(<Content search='bourse' sites={arraySite} />)

    expect(wrapper.find('th')).to.have.length(1)
  })

})
