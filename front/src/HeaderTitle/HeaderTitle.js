import React from 'react'
import './HeaderTitle.css'

const HeaderTitle = ({onArrowClick, site, filterAdministration, width}) =>
  <div className="header-title">
    <button className="show-details" onClick={onArrowClick}>+</button>
    <div id={ site.inspect.Domain }>
      <div>
        <a className="site-name" href={ site.inspect.Canonical }>{ site.inspect.Domain }</a>
        <a className="anchor" href={ "#" + site.inspect.Domain }><i className="fa fa-link" aria-hidden="true"></i></a>
      </div>
      <button className="administration-filter" onClick={() => filterAdministration(site.meta.Administration)}>{ site.meta.Administration }</button>
    </div>
  </div>

export default HeaderTitle
