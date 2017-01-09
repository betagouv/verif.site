import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Content from './Content'
import Site from '../Site/Site'
import SearchBar from '../SearchBar/SearchBar'

const arraySite = require('../../../test/resources/array-sites')

describe("Content", () => {

  it('should have a content class', () => {
    const wrapper = shallow(<Content sites={arraySite} />)

    expect(wrapper.hasClass('site-table')).to.equal(true)
  })

  it("Without seeking, it must display the entire list", () => {
    const wrapper = shallow(<Content sites={arraySite} />)

    expect(wrapper.find(Site)).to.have.length(2)
  })

  it("show the search bar", () => {
    const wrapper = shallow(<Content sites={arraySite} />)

    expect(wrapper.find(SearchBar)).to.have.length(1)
  })
})
