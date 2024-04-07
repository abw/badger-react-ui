import React      from 'react'
import Heading    from '@/web/page/Heading.jsx'
import Sections   from '@/web/page/Sections.jsx'
// import Section    from '@/web/page/Section.jsx'
// import Split      from '@/web/site/Split.jsx'
import Datatable  from './_examples/Datatable/index.jsx'
import Rows       from './_examples/rows/index.jsx'
import Columns     from './_examples/columns/index.jsx'
import Color      from './_examples/color/index.jsx'
import OnRowClick from './_examples/onRowClick/index.jsx'
import Pager      from './_examples/pager/index.jsx'
import StorageKey from './_examples/storageKey/index.jsx'
import Label      from './_examples/columns/label/index.jsx'
import Display    from './_examples/columns/display/index.jsx'
import Type       from './_examples/columns/type/index.jsx'

const DatatableExamples = () =>
  <div className="flow">
    <h1>Datatable</h1>
    <Datatable/>
    <Sections tocName="datatable">
      <Heading title="Properties"/>
      <Rows/>
      <Columns/>
      <OnRowClick/>
      <Color/>
      <Pager/>
      <StorageKey/>
      <Heading title="Column Properties"/>
      <Type/>
      <Display/>
      <Label/>
    </Sections>
  </div>

export default DatatableExamples