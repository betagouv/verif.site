import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import BigBadge from '../src/cells/BigBadge'

describe("BigBadge", () => {
  it("show the correct icon", () => {
    const expectedTitle = 'test-title'
    expect(shallow(<BigBadge title='test-title' />).contains(expectedTitle)).to.equal(true)
  })

  it("use the correst status as class", () => {
    expect(shallow(<BigBadge status='warning' />).find('td.warning')).to.have.length(1)
  })

  it("show the text", () => {
    const text = 'XXXX Valid'
    expect(shallow(<BigBadge text={ text } />).contains(text)).to.equal(true)
  })

})
