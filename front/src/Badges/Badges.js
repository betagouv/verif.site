import React from 'react'
import HttpsValid from '../cells/https/Valid/Valid'
import HttpsGrade from '../cells/https/Grade/Grade'
import HttpsEnforce from '../cells/https/Enforce/Enforce'
import HttpsDate from '../cells/https/Date/Date'
import Http2 from '../cells/Http2/Http2'
import CustomUptimeRatio from '../cells/uptime/CustomUptimeRatio/CustomUptimeRatio'
import AllTimeUptimeRatio from '../cells/uptime/AllTimeUptimeRatio/AllTimeUptimeRatio'
import './Badges.css'

const Badges = ({site, monitor}) =>
  <div className='badges'>
    <HttpsValid inspect={site.inspect} />
    <HttpsEnforce inspect={site.inspect} />
    <HttpsGrade tls={site.tls} />
    <Http2 tls={site.tls} />
    <HttpsDate sslyze={site.sslyze} />
    <CustomUptimeRatio monitor={monitor} />
    <AllTimeUptimeRatio monitor={monitor} />
  </div>

export default Badges
