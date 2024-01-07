import React    from 'react'
import Context  from './Context.js'
// import Icon     from '../Icon/Icon.jsx'
import PageSize from './PageSize.jsx'
// import Columns  from './Columns.jsx'

const Header = ({
  headerClass,
  // showControls,
}) =>
  <header className={headerClass}>
    <div className="flex space middle">
      <div>&nbsp;</div>
      <div>
        {/* <Columns/> */}
        <PageSize/>
      </div>
      {/*
      <Icon
        name="cog"
        className="hover"
        onClick={showControls}
      />
      */}
    </div>
  </header>

export default Context.Consumer(Header)