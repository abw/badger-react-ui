import React from 'react'
import { TableV1 as Table } from '@/src/index'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    shaded
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample