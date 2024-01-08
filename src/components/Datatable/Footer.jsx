import React    from 'react'
import Context  from './Context.js'
import Pager    from '@/components/Pager/Pager.jsx'

const Footer = ({
  footerClass,
  pager={},
  page,
  setPageNo
}) =>
  <footer className={footerClass}>
    <Pager
      page={page.page}
      pages={page.pages}
      setPage={n => setPageNo(n + 1)}
      {...pager}
    />
  </footer>

export default Context.Consumer(Footer)