import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import SearchBar from '../src/SearchBar/SearchBar'

describe("SearchBar", () => {

  it('should have a search-bar class', () => {
    const wrapper = shallow(<SearchBar />)
    expect(wrapper.find('.search-bar')).to.have.length(1)
  })

  it('should render an input', () => {
    const wrapper = shallow(<SearchBar />)

    expect(wrapper.containsMatchingElement(<input/>)).to.equal(true)
  })

})
