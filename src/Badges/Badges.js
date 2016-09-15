import React from 'react'
import HttpsValid from '../cells/https/Valid/Valid'
import HttpsGrade from '../cells/https/Grade/Grade'
import HttpsDate from '../cells/https/Date/Date'
import CustomUptimeRatio from '../cells/uptime/CustomUptimeRatio/CustomUptimeRatio'
import './Badges.css'

const Badges = ({site, monitor}) =>
  <div className='badges'>
    <HttpsValid inspect={site.inspect} />
    <HttpsGrade tls={site.tls} />
    <HttpsDate sslyze={site.sslyze} />
    <CustomUptimeRatio monitor={monitor} />
  </div>

export default Badges
