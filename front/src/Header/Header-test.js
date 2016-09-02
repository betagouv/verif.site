import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Header from './Header'
import Charts from '../Charts/Charts'

const arraySite = require('../../test/resources/array-sites')

describe("Header", () => {
  it("should have a Charts Component", () => {
    const wrapper = shallow(<Header sites={arraySite} />)

    expect(wrapper.find(Charts)).to.have.length(1)
  })
})
