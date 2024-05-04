import React        from 'react'
import DataTables   from './_examples/DataTables/index.jsx'
import Breakpoint   from './_examples/breakpoint/index.jsx'
import Sections     from '@/web/page/Sections.jsx'
import Heading      from '@/web/page/Heading.jsx'

const DataTablesExamples = () =>
  <div className="flow">
    <h1>DataTables</h1>
    <DataTables/>
    <Sections tocName="datatables">
      <Heading title="Properties"/>
      <Breakpoint/>
    </Sections>
  </div>

export default DataTablesExamples