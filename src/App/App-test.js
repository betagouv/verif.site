import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import App from './App'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Site from '../Site/Site'
import Footer from '../Footer/Footer'
import fetchMock from 'fetch-mock'
import { Loader } from 'react-loaders'

const httpSites = require('../../test/resources/http-sites')
const arraySite = require('../../test/resources/array-sites')

describe("Apps", () => {

  before(() => {
    return fetchMock.mock('http://www.data.gouv.fr/s/resources/caracteristiques-techniques-des-sites/20161018-145351/sites.json', 'GET', httpSites)
  })

  afterEach(() => {
    return fetchMock.reset()
  })

  describe("Init", () => {

    it('show the loader', () => {
      const wrapper = shallow(<App/>)

      expect(wrapper.state().loading).to.be.true
      expect(wrapper.find(Loader)).to.have.length(1)
    })

    it('Should add the analytics', (done) => {
      //when
      const wrapper = shallow(<App/>)

      //then (sââââââââle)
      setTimeout(() => {
        expect(fetchMock.calls().matched).to.have.length(1)
        expect(wrapper.state().analytics).to.have.length(2)
        expect(wrapper.state().loading).to.be.false
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

    it("show the content", () => {
      const wrapper = shallow(<App/>)

      expect(wrapper.find(Content)).to.have.length(1)
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

    it('With seeking, it must display the corresponding single site', (done) => {
      const wrapper = mount(<App />)

      //then (sââââââââle)
      setTimeout(() => {
        wrapper.setState({query: 'bourse'})
        expect(wrapper.find(Site)).to.have.length(1)
        done()
      }, 200)
    })


    it('should init query', (done) => {
      const wrapper = mount(<App />)

      expect(wrapper.state().query).equal('')
      done()
    })
  })

  it("calls handleTextChange with the correct query", () => {
    const wrapper = mount(<App/>)
    const textChangeSpy = sinon.spy();

    wrapper.instance().handleTextChange = textChangeSpy
    wrapper.instance().filterAdministration('test')

    expect(textChangeSpy).to.have.been.called
    expect(textChangeSpy.args[0][0]).to.equal('test');
  })

  it("calls handleTextChange with an empty query if it was already selected", () => {
    const wrapper = mount(<App/>)
    const textChangeSpy = sinon.spy();

    wrapper.setState({query: 'bourse'})
    wrapper.instance().handleTextChange = textChangeSpy
    wrapper.instance().filterAdministration('bourse')

    expect(textChangeSpy).to.have.been.called
    expect(textChangeSpy.args[0][0]).to.equal('');
  })
})
