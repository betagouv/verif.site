import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import HeaderRow from './HeaderRow';
import HttpsValid from '../cells/https/Valid/Valid'
import HttpsGrade from '../cells/https/Grade/Grade'
import HttpsEnforce from '../cells/https/Enforce/Enforce'
import Http2 from '../cells/Http2/Http2'

const arraySite = require('../../test/resources/array-sites')

describe("HeaderRow", () => {

  it('should contain HttpsValid', () => {
    const wrapper = shallow(<HeaderRow key={0} site={arraySite[0]}/>)

    expect(wrapper.find(HttpsValid)).to.have.length(1)
  })

  it('should contain HttpsGrade', () => {
    const wrapper = shallow(<HeaderRow key={0} site={arraySite[0]}/>)

    expect(wrapper.find(HttpsGrade)).to.have.length(1)
  })

  it('should contain HttpsEnforce', () => {
    const wrapper = shallow(<HeaderRow key={0} site={arraySite[0]}/>)

    expect(wrapper.find(HttpsEnforce)).to.have.length(1)
  })

  it('should contain Http2', () => {
    const wrapper = shallow(<HeaderRow key={0} site={arraySite[0]}/>)

    expect(wrapper.find(Http2)).to.have.length(1)
  })

  it('should call the filter function', () => {
    const filterAdministration = sinon.spy()
    const wrapper = shallow(<HeaderRow key={0} site={arraySite[0]} filterAdministration={filterAdministration}/>)
    const filterButton = wrapper.find('.filter')

    filterButton.simulate('click')

    // check if filterAdministration has been called
    expect(filterAdministration.called).to.be.true
    expect(filterAdministration.args[0][0]).to.equal('Incubateur Services Numeriques')
  })
})
