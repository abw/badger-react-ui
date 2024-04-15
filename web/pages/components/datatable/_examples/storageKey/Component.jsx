import React from 'react'
import { Datatable } from '@/src/index.jsx'
import { animals } from '../data.js'

const DatatableExample = () =>
  /* START */
  <Datatable
    rows={animals}
    columns="id name animal role"
    storageKey="badger-datatable-animals-demo1"
  />
  /* END */

export default DatatableExample