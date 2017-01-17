import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { deepClone } from '../../../test/tools'

import Site from './Site';
import fetchMock from 'fetch-mock'

const arraySite = require('../../../test/resources/array-sites')
const uptime = require('../../../test/resources/uptime')

describe('HeaderRow', () => {


  describe('after init', () => {
    it('the details are hidden', () => {
      const wrapper = mount(<Site site={arraySite[0]}/>)

      expect(wrapper.find('.hidden')).to.have.length(1);
      expect(wrapper.find('.visible')).to.have.length(0);
    })
  })

  describe('when we click on the button', ()=> {
    it('shows the detail', () => {
      const wrapper = mount(<Site site={arraySite[0]}/>)

      wrapper.find('.show-details button').simulate('click')

      expect(wrapper.find('.hidden')).to.have.length(0);
      expect(wrapper.find('.visible')).to.have.length(1);
    })
  })

  describe('when we click twice on the button', ()=> {
    it('hide the detail', () => {
      const wrapper = mount(<Site site={arraySite[0]}/>)

      wrapper.find('.show-details button').simulate('click')
      wrapper.find('.show-details button').simulate('click')

      expect(wrapper.find('.hidden')).to.have.length(1);
      expect(wrapper.find('.visible')).to.have.length(0);
    })
  })

  describe('fetch uptimes', () => {
    before(() => {
      return fetchMock.get('https://api.uptimerobot.com/getMonitors?apiKey=testKey&format=json&noJsonCallback=1&customUptimeRatio=7&responseTimes=1&responseTimesAverage=1440', uptime);
    })


    afterEach(() => {
      return fetchMock.reset()
    })

    it('Should update state on fetch', (done) => {

      //when
      const site = deepClone(arraySite)[0];
      site.meta.UptimeApiKey = "testKey"
      const wrapper = shallow(<Site site={site} />)

      //then (sââââââââle)
      setTimeout(() => {
        expect(fetchMock.calls().matched).to.have.length(1)
        expect(wrapper.state().monitor.alltimeuptimeratio).to.equal("100")
        expect(wrapper.state().monitor.customuptimeratio).to.equal("90")

        done()
      }, 10)
    })
  })
})
