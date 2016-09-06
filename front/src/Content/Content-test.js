import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Content from './Content'
import Site from '../Site/Site'
import SearchBar from '../SearchBar/SearchBar'
import Charts from '../Charts/Charts'

const arraySite = require('../../test/resources/array-sites')

describe("Content", () => {

  it('should have a content class', () => {
    const wrapper = shallow(<Content sites={arraySite} />)

    expect(wrapper.hasClass('site-table')).to.equal(true)
  })

  it("should have a Charts Component", () => {
    const wrapper = shallow(<Content sites={arraySite} />)

    expect(wrapper.find(Charts)).to.have.length(1)
  })

  it("Without seeking, it must display the entire list", () => {
    const wrapper = shallow(<Content sites={arraySite} />)

    expect(wrapper.find(Site)).to.have.length(2)
  })

  it('With seeking, it must display the corresponding single site', () => {
    const wrapper = shallow(<Content sites={arraySite} />)

    wrapper.setState({query: 'bourse'})

    expect(wrapper.find(Site)).to.have.length(1)
  })

  it('should init query', (done) => {
    const wrapper = shallow(<Content sites={arraySite}/>)

    expect(wrapper.state().query).equal('')
    done()
  })

  it("show the search bar", () => {
    const wrapper = shallow(<Content sites={arraySite} />)

    expect(wrapper.find(SearchBar)).to.have.length(1)
  })

  it("calls handleTextChange with the correct query", () => {
    const wrapper = mount(<Content sites={arraySite}/>)
    const textChangeSpy = sinon.spy();

    wrapper.instance().handleTextChange = textChangeSpy
    wrapper.instance().filterAdministration('test')

    expect(textChangeSpy).to.have.been.called
    expect(textChangeSpy.args[0][0]).to.equal('test');
  })

  it("calls handleTextChange with an empty query if it was already selected", () => {
    const wrapper = mount(<Content sites={arraySite}/>)
    const textChangeSpy = sinon.spy();

    wrapper.setState({query: 'bourse'})
    wrapper.instance().handleTextChange = textChangeSpy
    wrapper.instance().filterAdministration('bourse')

    expect(textChangeSpy).to.have.been.called
    expect(textChangeSpy.args[0][0]).to.equal('');
  })
})
