import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DetailCategory, { parser } from '../src/DetailCategory/DetailCategory';


describe("DetailCategory", () => {

  const dict = {
    'inspect': {
      'a': 'A'
    }
  }
  it('show no data if the map is empty', () => {
    const data = {}
    const wrapper = shallow(<DetailCategory data={data} dict={dict}/>)

    expect(wrapper.find('dt')).to.have.length(0)
    expect(wrapper.find('dd')).to.have.length(0)
  })

  it('doesn\'t show if the value is ""', () => {
    const data = {
      'inspect': {
        'a': ''
      }
    }
    const wrapper = shallow(<DetailCategory data={data} dict={dict}/>)

    expect(wrapper.find('dt')).to.have.length(0)
  })

  it('show dt dl couple with one entry', () => {
    const data = {
      'inspect': {
        'a': 'b'
      }
    }
    const wrapper = shallow(<DetailCategory data={data} dict={dict}/>)

    expect(wrapper.find('dt')).to.have.length(1)
    expect(wrapper.contains(<dd>b</dd>)).to.be.true
  })

  it('show 2 dt dl couple with 2 categories', () => {
    const data = {
      'inspect': {
        'a': 'b'
      },
      'c': {
        'd': 'b'
      }
    }
    const dict2 = {
      'inspect': {
        'a': 'A'
      },
      'c': {
        'd': 'D'
      }
    }
    const wrapper = shallow(<DetailCategory data={data} dict={dict2}/>)

    expect(wrapper.find('dt')).to.have.length(2)
  })

  it('call the parser', () => {
    const data = {
      'inspect': {
        'a': true
      }
    }
    const wrapper = shallow(<DetailCategory data={data} dict={dict}/>)

    expect(wrapper.contains(<dd>Oui</dd>)).to.be.true
  })

  it('replace the key by the value in the dictionnary', () => {
    const data = {
      'inspect': {
        'a': true
      }
    }
    const wrapper = shallow(<DetailCategory data={data} dict={dict}/>)

    expect(wrapper.contains(<dt>A</dt>)).to.be.true
  })

  describe('the parser', () => {

    describe('when the value is a string', () => {
      const input = 'value'
      it('return the string', () => {
        expect(parser(input)).to.equal('value')
      })
    })

    describe('when the value is true', () => {
      const input = true
      it('return Oui', () => {
        expect(parser(input)).to.equal('Oui')
      })
    })

    describe('when the value is true', () => {
      const input = false
      it('return Non', () => {
        expect(parser(input)).to.equal('Non')
      })
    })
  })

})
