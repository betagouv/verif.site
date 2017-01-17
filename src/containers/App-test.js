import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import App from './App'
import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Site from '../components/Site/Site'
import Footer from '../components/Footer/Footer'
import fetchMock from 'fetch-mock'
import { Loader } from 'react-loaders'
import { createMockStore } from 'redux-test-utils';
import { Provider } from 'react-redux';

const httpSites = require('../../test/resources/http-sites')
const arraySite = require('../../test/resources/array-sites')

const resourceUrl = 'https://www.data.gouv.fr/s/resources/caracteristiques-techniques-des-sites/234/sites.json'
const datasetUrl = 'https://www.data.gouv.fr/api/1/datasets/5805f1e2c751df2bb879df72/'

describe('Apps', () => {

  before(() => {
    return fetchMock.get(resourceUrl, httpSites, {name: 'resourceMock'})
  })

  before(() => {
    return fetchMock.get(datasetUrl, {resources: [{url:resourceUrl}]}, {name: 'datasetMock'})
  })

  afterEach(fetchMock.reset)

  describe('Init', () => {
    it('Shows the loader', () => {
      const store = createMockStore({ isFetching: true, items: [] })
      const wrapper = mount(<Provider store={store}><App /></Provider>)

      expect(wrapper.find(Loader)).to.have.length(1)
    })
  })

  describe('Contains', () => {
    it('Shows the header', () => {
      const store = createMockStore({ items: arraySite })
      const wrapper = mount(<Provider store={store}><App /></Provider>)

      expect(wrapper.find(Header)).to.have.length(1)
    })

    it('Shows the content', () => {
      const store = createMockStore({ items: arraySite })
      const wrapper = mount(<Provider store={store}><App /></Provider>)

      expect(wrapper.find(Content)).to.have.length(1)
    })

    it('Shows the footer', () => {
      const store = createMockStore({ items: arraySite })
      const wrapper = mount(<Provider store={store}><App /></Provider>)

      expect(wrapper.find(Footer)).to.have.length(1)
    })

    it('Should have 2 rows', () => {
      const store = createMockStore({ items: arraySite })
      const wrapper = mount(<Provider store={store}><App /></Provider>)

      expect(wrapper.find(Site)).to.have.length(2)
    })

    it('With query, it must display the corresponding single site', () => {
      const store = createMockStore({ items: arraySite, query: 'bourse' })
      const wrapper = mount(<Provider store={store}><App /></Provider>)

      expect(wrapper.find(Site)).to.have.length(1)
    })
  })
})
