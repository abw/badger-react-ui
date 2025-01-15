import React from 'react'
import { Table } from '@/src/index'
import { headings, rows } from '../spinal-tap.jsx'

const TableExample = () =>
  /* START */
  <Table
    size="smaller"
    celled striped
    headings={headings}
    rows={rows}
  />
  /* END */

export default TableExample