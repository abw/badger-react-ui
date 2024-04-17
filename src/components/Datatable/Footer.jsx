import React    from 'react'
import Context  from './Context.js'
import Pager    from '@/components/Pager/Pager.jsx'

const Footer = ({
  footerClass,
  pager={},
  page,
  setPageNo,
  pagerSize='small'
}) =>
  <footer className={footerClass}>
    <Pager
      page={page.page}
      pages={page.pages}
      setPage={n => setPageNo(n + 1)}
      size={pagerSize}
      {...pager}
    />
  </footer>

export const DatatableFooter = Context.Consumer(Footer)
export default DatatableFooter