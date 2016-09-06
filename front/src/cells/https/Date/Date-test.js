import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import HttpsDate from './Date';

describe("HttpsDate", () => {
  let clock

  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date('2016-08-23 10:05:24+00:00').getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it("show the correct diff in days", () => {
    const expectedDiff = '116j';
    const expected = <div className="big">{expectedDiff}</div>
    const data = { 'Not After':'2016-12-17 10:05:24+00:00'}

    expect(shallow(<HttpsDate sslyze={data} />).contains(expected)).to.equal(true)
  })

  it("show the correct className", () => {
    const data = { 'Not After':'2016-08-25 10:05:24+00:00'}
    expect(shallow(<HttpsDate sslyze={data} />).find('.invalid')).to.have.length(1)
  })
})
