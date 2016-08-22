import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import Header from '../src/Header';
import SearchBar from '../src/SearchBar';
import Content from '../src/Content';
import SiteRow from '../src/SiteRow';
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

  describe("Init", () => {
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

    it('should init text', (done) => {
      const wrapper = shallow(<App/>);

      expect(wrapper.state().text).equal('')
      done()
    });
  })

    describe("Contains", () => {
    it("show the header", () => {
      expect(shallow(<App />).contains(<Header />)).to.equal(true)
    })

    it("show the search bar", () => {
      const wrapper = shallow(<App/>);

      expect(wrapper.contains(<SearchBar onChange={wrapper.instance().handleTextChange} text={wrapper.state().text} />)).to.equal(true)
    })

    it("show the content", () => {
      const wrapper = shallow(<App/>);

      expect(wrapper.contains(<Content sites={wrapper.state().analytics} search={wrapper.state().text} />)).to.equal(true)
    })

    it("show the footer", () => {
      expect(shallow(<App />).contains(<Footer lastUpdated={undefined} />)).to.equal(true)
    })

    it('Should have 2 rows', (done) => {

      //when
      const wrapper = mount(<App/>);

      //then (sââââââââle)
      setTimeout(() => {
        expect(wrapper.find(SiteRow)).to.have.length(2)
        done()
      }, 200)
    });
  })

  it('should be lowercase', () => {
    const wrapper = mount(<App />)
    const input = wrapper.find('input')

    input.simulate('change', { target: { value: 'LOWERCASE' } });
    expect(wrapper.state().text).equal('lowercase')
  });
})
