import React    from 'react'
import Context  from './Context.js'
import DatatablePageSize from './PageSize.jsx'

const Header = ({
  headerClass,
  PageSize=DatatablePageSize
}) =>
  <header className={headerClass}>
    <div className="flex space">
      <div>pp</div>
      <PageSize/>
    </div>
  </header>

export default Context.Consumer(Header)