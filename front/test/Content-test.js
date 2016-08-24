import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Content from '../src/Content'
import Site from '../src/Site'
import SearchBar from '../src/SearchBar'

const arraySite = require('./resources/array-sites')

describe("Content", () => {


  it('should have a site-table class', () => {
    const wrapper = shallow(<Content sites={arraySite} />)

    expect(wrapper.hasClass('site-table')).to.equal(true)
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
    const wrapper = shallow(<Content sites={arraySite}/>)

    expect(wrapper.contains(<SearchBar onChange={wrapper.instance().handleTextChange} query={wrapper.state().query} />)).to.equal(true)
  })
})
