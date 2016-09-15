import React from 'react'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import Badges from '../Badges/Badges'
import MiniBadges from '../MiniBadges/MiniBadges'
import './HeaderRow.css'

const HeaderRow = (props) =>
  <div className='site-header'>
    <HeaderTitle {...props} />
    <div className='badges-container'>
      <Badges {...props} />
      <MiniBadges {...props} />
    </div>
  </div>

export default HeaderRow
