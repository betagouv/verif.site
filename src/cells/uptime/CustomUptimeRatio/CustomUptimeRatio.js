import React from 'react'
import UptimeRatio from '../UptimeRatio/UptimeRatio'

const CustomUptimeRatio = ({monitor}) =>
  <UptimeRatio ratio={monitor.customuptimeratio} title="Uptime (7j)" />

export default CustomUptimeRatio
