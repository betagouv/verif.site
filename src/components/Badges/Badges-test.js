import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Badges from './Badges';
import HttpsValid from '../cells/https/Valid/Valid'
import HttpsGrade from '../cells/https/Grade/Grade'

const arraySite = require('../../../test/resources/array-sites')

describe("Badges", () => {

  it('should contain HttpsValid', () => {
    const wrapper = shallow(<Badges key={0} site={arraySite[0]}/>)

    expect(wrapper.find(HttpsValid)).to.have.length(1)
  })

  it('should contain HttpsGrade', () => {
    const wrapper = shallow(<Badges key={0} site={arraySite[0]}/>)

    expect(wrapper.find(HttpsGrade)).to.have.length(1)
  })
})
