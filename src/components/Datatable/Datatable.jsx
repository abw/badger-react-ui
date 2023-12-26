import React            from 'react'
import Context          from './Context.js'
import DatatableContent from './Content.jsx'
import { Themed }       from '@/src/Theme.jsx'

const Datatable = ({
  Content=DatatableContent,
  ...props
}) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

export default Themed(Datatable, 'Datatable')

