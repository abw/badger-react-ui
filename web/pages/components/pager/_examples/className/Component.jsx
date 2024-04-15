import React, { useState } from 'react'
import { Pager } from '@/src/index.jsx'

const Component = () => {
  const [page, setPage] = useState(0)
  return (
    /* START */
    <Pager
      pages={11}
      page={page}
      setPage={setPage}
      className="pager small brand border pad-2 bdr-2 bgc-90 bgd-10"
    />
    /* END */
  )
}

export default Component
