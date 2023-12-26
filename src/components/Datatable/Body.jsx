import React          from 'react'
import Context        from './Context.js'
import DatatableTable from './Table.jsx'

const Body = ({
  scrollX,
  Table=DatatableTable,
}) =>
  <div className={scrollX ? 'scroll-x' : ''}>
    <Table/>
  </div>

export default Context.Consumer(Body)