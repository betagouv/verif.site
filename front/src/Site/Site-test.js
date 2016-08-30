import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Site from './Site';

const arraySite = require('../../test/resources/array-sites')

describe('HeaderRow', () => {
  describe('after init', () => {
    it('the details are hidden', () => {
      const wrapper = mount(<table><Site site={arraySite[0]}/></table>)

      expect(wrapper.find('.hidden')).to.have.length(1);
      expect(wrapper.find('.visible')).to.have.length(0);
    })
  })

  describe('when we click on the button', ()=> {
    it('shows the detail', () => {
      const wrapper = mount(<table><Site site={arraySite[0]}/></table>)

      wrapper.find('.show-details button').simulate('click')

      expect(wrapper.find('.hidden')).to.have.length(0);
      expect(wrapper.find('.visible')).to.have.length(1);
    })
  })

  describe('when we click twice on the button', ()=> {
    it('hide the detail', () => {
      const wrapper = mount(<table><Site site={arraySite[0]}/></table>)

      wrapper.find('.show-details button').simulate('click')
      wrapper.find('.show-details button').simulate('click')

      expect(wrapper.find('.hidden')).to.have.length(1);
      expect(wrapper.find('.visible')).to.have.length(0);
    })
  })
})
