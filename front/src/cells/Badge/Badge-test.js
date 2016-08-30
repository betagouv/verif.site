import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Badge from './Badge'

describe("Badge", () => {
  it("show the correct icon", () => {
    const expectedIcon = <i className="icon fa fa-check-circle" />
    expect(shallow(<Badge icon='fa-check-circle' />).contains(expectedIcon)).to.equal(true)
  })

  it("use the correst status as class", () => {
    expect(shallow(<Badge status='warning' />).find('td.warning')).to.have.length(1)
  })

  it("show the text", () => {
    const text = 'XXXX Valid'
    expect(shallow(<Badge text={ text } />).contains(text)).to.equal(true)
  })


})
