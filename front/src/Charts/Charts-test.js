import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Charts from './Charts'
import Bool from './Bool/Bool'
import Categories from './Categories/Categories'

const arraySite = require('../../test/resources/array-sites')

describe("Charts", () => {

  it('should have a charts class', () => {
    const wrapper = shallow(<Charts sites={arraySite} />)

    expect(wrapper.hasClass('charts')).to.equal(true)
  })

  it('should have Bool Component', () => {
    const wrapper = shallow(<Charts sites={arraySite} />)

    expect(wrapper.find(Bool)).to.have.length(2)
  })

  it('should have Categories Component', () => {
    const wrapper = shallow(<Charts sites={arraySite} />)

    expect(wrapper.find(Categories)).to.have.length(1)
  })
})
