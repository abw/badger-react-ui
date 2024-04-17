import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () =>
  /* START */
  <Datatable
    tableClass="lined"
    rows={animals}
    columns="id name animal role"
  />

export default DatatableExample

