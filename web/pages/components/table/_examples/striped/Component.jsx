import React from 'react'
import { Table } from '@/src/index'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    striped
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample