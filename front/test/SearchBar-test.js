import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchBar from '../src/SearchBar';
import Content from '../src/Content';

describe("SearchBar", () => {

  it('should init text', (done) => {
    const wrapper = shallow(<SearchBar/>);

    expect(wrapper.state().text).equal('')
    done()
  });

  it('should be lowercase', () => {
    const wrapper = shallow(<SearchBar/>)
    const input = wrapper.find('input')

    input.simulate('change', { target: { value: 'LOWERCASE' } });
    expect(wrapper.state().text).equal('lowercase')
  });

  it("show the content", () => {
    expect(shallow(<SearchBar />).contains(<Content sites={shallow(<SearchBar />).props.sites} search={shallow(<SearchBar />).state().text} />)).to.equal(true)
  })

})
