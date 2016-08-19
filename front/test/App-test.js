import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import Header from '../src/Header';
import SearchBar from '../src/SearchBar';
import Footer from '../src/Footer';
import fetchMock from 'fetch-mock';
const httpSites = require('./resources/http-sites')
const arraySite = require('./resources/array-sites')


describe("Apps", () => {

  before(() => {
    return fetchMock.mock('https://raw.githubusercontent.com/sgmap/sites/master/data/sites.json', 'GET', httpSites);
  });

  afterEach(() => {
    return fetchMock.reset();
  });

  it('Should add the analytics', (done) => {
    //when
    const wrapper = shallow(<App/>);

    //then (sââââââââle)
    setTimeout(() => {
      expect(fetchMock.calls().matched).to.have.length(1)
      expect(wrapper.state().analytics).to.have.length(2)
      expect(wrapper.state().analytics).deep.equal(arraySite)
      done()
    }, 10)
  });

  it('Should update state on fetch', (done) => {

    //when
    const wrapper = shallow(<App/>);

    //then (sââââââââle)
    setTimeout(() => {
      expect(fetchMock.calls().matched).to.have.length(1)
      expect(wrapper.state().meta.lastUpdated).to.equal('8/16/2016, 4:48:01 PM')
      done()
    }, 10)
  });

  it("show the header", () => {
    expect(shallow(<App />).contains(<Header />)).to.equal(true)
  })

  it("show the search bar", () => {
    expect(shallow(<App />).contains(<SearchBar sites={shallow(<App />).state().analytics} />)).to.equal(true)
  })

  it("show the footer", () => {
    expect(shallow(<App />).contains(<Footer lastUpdated={undefined} />)).to.equal(true)
  })

  it('Should have 2 rows', (done) => {

    //when
    const wrapper = mount(<App/>);

    //then (sââââââââle)
    setTimeout(() => {
      expect(wrapper.find('th')).to.have.length(2)
      done()
    }, 200)
  });

})
