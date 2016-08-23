import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import SearchBar from '../src/SearchBar'

describe("SearchBar", () => {

  it('should has an search-bar class', () => {
    const wrapper = shallow(<SearchBar />)

    expect(wrapper.hasClass('search-bar')).to.equal(true)
  })

  it('should render an input', () => {
    const wrapper = shallow(<SearchBar />)

    expect(wrapper.containsMatchingElement(<input/>)).to.equal(true)
  })

})
