import React from 'react'
import HttpsEnforce from '../cells/https/Enforce/Enforce'
import HttpsIssuer from '../cells/https/Issuer/Issuer'
import Http2 from '../cells/Http2/Http2'
import AllTimeUptimeRatio from '../cells/uptime/AllTimeUptimeRatio/AllTimeUptimeRatio'
import './MiniBadges.css'

const MiniBadges = ({site, monitor}) =>
  <div className='mini-badges'>
    <HttpsEnforce inspect={site.inspect} />
    <Http2 tls={site.tls} />
    <AllTimeUptimeRatio monitor={monitor} />
    <HttpsIssuer sslyze={site.sslyze} />
  </div>

export default MiniBadges
