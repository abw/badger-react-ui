import React from 'react'
import { Table } from '@/src/index.jsx'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    border={2}
    celled striped
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample