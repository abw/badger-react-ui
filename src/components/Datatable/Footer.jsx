import React    from 'react'
import Context  from './Context.js'
import Pager    from '@/components/Pager/Pager.jsx'

const Footer = ({
  footerClass,
  page,
  setPageNo,
  sortColumn
}) =>
  <footer className={footerClass}>
    <Pager
      page={page.page}
      pages={page.pages}
      setPage={n => setPageNo(n + 1)}
    />
    Sorting: {sortColumn}
  </footer>

export default Context.Consumer(Footer)