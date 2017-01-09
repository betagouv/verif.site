import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import sinon from 'sinon'
import HeaderRow from './HeaderRow';

const arraySite = require('../../../test/resources/array-sites')

describe("HeaderRow", () => {

  it('should call the filter function', () => {
    const filterAdministration = sinon.spy()
    const wrapper = mount(<HeaderRow key={0} site={arraySite[0]} monitor={{}} filterAdministration={filterAdministration}/>)
    const filterButton = wrapper.find('.administration-filter')

    filterButton.simulate('click')

    // check if filterAdministration has been called
    expect(filterAdministration.called).to.be.true
    expect(filterAdministration.args[0][0]).to.equal('Incubateur Services Numeriques')
  })
})
