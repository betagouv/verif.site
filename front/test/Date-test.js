import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HttpsDate from '../src/cells/https/Date';

describe("HttpsDate", () => {
  it("show the unknown td when no data is available", () => {
    const unknown = <td className="unknown"></td>
    const noData = {}
    expect(shallow(<HttpsDate sslyze={noData} />).contains(unknown)).to.equal(true)
  })

  it("show the correct diff in days", () => {
    const expectedDiff = '116j';
    const expected = <div className="big">{expectedDiff}</div>
    const data = { 'Not After':'2016-12-17 10:05:24+00:00', __today__: new Date('2016-08-23 10:05:24+00:00')}

    expect(shallow(<HttpsDate sslyze={data} />).contains(expected)).to.equal(true)
  })

  it("show the correct className", () => {
    const data = { 'Not After':'2016-08-25 10:05:24+00:00', __today__: new Date('2016-08-23 10:05:24+00:00')}
    console.log(shallow(<HttpsDate sslyze={data} />).debug());
    expect(shallow(<HttpsDate sslyze={data} />).find('.invalid')).to.have.length(1)
  })
})
