import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Content from '../src/Content'
import Site from '../src/Site'

const arraySite = require('./resources/array-sites')

describe("Content", () => {


  it('should has an site-table class', () => {
    const wrapper = shallow(<Content sites={arraySite} />)

    expect(wrapper.hasClass('site-table')).to.equal(true)
  })

  it("Without seeking, it must display the entire list", () => {
    const wrapper = shallow(<Content sites={arraySite} />)

    expect(wrapper.find(Site)).to.have.length(2)
  })

  it('With seeking, it must display the corresponding single site', () => {
    const wrapper = shallow(<Content search='bourse' sites={arraySite} />)

    expect(wrapper.find(Site)).to.have.length(1)
  })

})
