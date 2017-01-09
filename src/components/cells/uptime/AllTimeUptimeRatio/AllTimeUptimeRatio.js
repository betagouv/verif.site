import React from 'react'
import UptimeRatio from '../UptimeRatio/UptimeRatio'

const AllTimeUptimeRatio = ({monitor}) =>
  <UptimeRatio ratio={monitor.alltimeuptimeratio} title="Uptime" />

export default AllTimeUptimeRatio
