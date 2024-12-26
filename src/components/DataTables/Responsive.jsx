import React from 'react'
import DataTable from '../DataTable/DataTable.jsx'
import Body from './Body.jsx'
import { useContainer } from '@/src/index.jsx'
import { parseSize } from '@/src/utils/size.js'

const DataTables = ({
  breakpoint,
  ...props
}) => {
  const minPx = parseSize(breakpoint)
  const { ref, width } = useContainer()
  return (
    <div ref={ref}>
      <DataTable
        Body={width < minPx ? Body : undefined}
        {...props}
      />
    </div>
  )
}

export default DataTables