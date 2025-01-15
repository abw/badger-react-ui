import React from 'react'
import { Table } from '@/src/index'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    celled
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample