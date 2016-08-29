import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Charts from '../src/Charts'
import Bool from '../src/charts/Bool'
import Categories from '../src/charts/Categories'

const arraySite = require('./resources/array-sites')

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
