import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import App from './App'
import Header from '../Header/Header'
import Site from '../Site/Site'
import Footer from '../Footer/Footer'
import Domains from '../Domains/Domains'
import Administrations from '../Administrations/Administrations'

import fetchMock from 'fetch-mock'

const httpSites = require('../../test/resources/http-sites')
const arraySite = require('../../test/resources/array-sites')

describe("Apps", () => {

  before(() => {
    return fetchMock.mock('https://raw.githubusercontent.com/sgmap/sites/master/data/sites.json', 'GET', httpSites)
  })

  afterEach(() => {
    return fetchMock.reset()
  })

  describe("Init", () => {
    it('Should add the analytics', (done) => {
      //when
      const wrapper = shallow(<App/>)

      //then (sââââââââle)
      setTimeout(() => {
        expect(fetchMock.calls().matched).to.have.length(1)
        expect(wrapper.state().analytics).to.have.length(2)
        expect(wrapper.state().analytics).deep.equal(arraySite)
        done()
      }, 10)
    })

    it('Should update state on fetch', (done) => {

      //when
      const wrapper = shallow(<App/>)

      //then (sââââââââle)
      setTimeout(() => {
        expect(fetchMock.calls().matched).to.have.length(1)
        expect(wrapper.state().meta.lastUpdated).to.equal('8/16/2016, 4:48:01 PM')
        done()
      }, 10)
    })
  })

  describe("Contains", () => {
    it("show the header", () => {
      const wrapper = shallow(<App/>)

      expect(wrapper.find(Header)).to.have.length(1)
    })

    it("show the domains", () => {
      const wrapper = shallow(<App/>)

      expect(wrapper.find(Domains)).to.have.length(1)
    })

    describe(' when clicking on the administration button', () => {
      it("show the administrations", () => {
        const wrapper = shallow(<App/>)
        const adminButton = wrapper.find('button.admin')

        adminButton.simulate('click')

        expect(wrapper.find(Administrations)).to.have.length(1)
      })
    })

    it("show the footer", () => {
      const wrapper = shallow(<App/>)

      expect(wrapper.find(Footer)).to.have.length(1)
    })

    it('Should have 2 rows', (done) => {

      //when
      const wrapper = mount(<App/>)

      //then (sââââââââle)
      setTimeout(() => {
        expect(wrapper.find(Site)).to.have.length(2)
        done()
      }, 200)
    })
  })
})
