import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import Administrations from '../src/Administrations'
import Admin from '../src/Admin'

const arraySite = require('./resources/array-sites-with-multiple-admin')
const expectedSitesGroupAdmin = require('./resources/sites-group-by-admin')

describe("Administrations", () => {
  it('should have a site-table class', () => {
    const wrapper = shallow(<Administrations sites={arraySite} />)

    expect(wrapper.hasClass('site-table')).to.equal(true)
  })

  it("Without seeking, it must display the administrations", () => {
    const wrapper = shallow(<Administrations sites={arraySite} />)

    expect(wrapper.find(Admin)).to.have.length(2)
  })

  describe('the groupSiteByAdmin function', () => {
    it("group sites by admin", () => {
      const wrapper = mount(<Administrations sites={arraySite}/>)

      const actual = wrapper.instance().groupSiteByAdmin()
      expect(actual).to.deep.equal(expectedSitesGroupAdmin)
    })
  })


})
