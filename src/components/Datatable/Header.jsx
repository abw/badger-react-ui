import React             from 'react'
import Context           from './Context.js'
import DatatableSummary  from './Summary.jsx'
import DatatablePageSize from './PageSize.jsx'

const Header = ({
  headerClass,
  Summary=DatatableSummary,
  PageSize=DatatablePageSize,
  // showControls,
}) =>
  <header className={headerClass}>
    <div className="flex space middle">
      <div>
        <Summary/>
      </div>
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