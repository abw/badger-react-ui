import React from 'react'
import Head from './Columns/Head.jsx'
import Body from './Columns/Body.jsx'

const Columns = ({
  rows,
  columns,
  ...props
}) =>
  <>
    <Head columns={columns} {...props}/>
    <Body columns={columns} rows={rows} {...props}/>
  </>

export default Columns