import React from 'react'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import Badges from '../Badges/Badges'
import './HeaderRow.css'

const HeaderRow = (props) =>
  <div className='site-header'>
    <HeaderTitle {...props} />
    <Badges {...props} />
  </div>

export default HeaderRow
