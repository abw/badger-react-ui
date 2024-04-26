import React      from 'react'
import Heading    from '@/web/page/Heading.jsx'
import Sections   from '@/web/page/Sections.jsx'
// import Section    from '@/web/page/Section.jsx'
// import Split      from '@/web/site/Split.jsx'
import DataTable  from './_examples/DataTable/index.jsx'
import Rows       from './_examples/rows/index.jsx'
import Columns     from './_examples/columns/index.jsx'
import Color      from './_examples/color/index.jsx'
import TableClass from './_examples/tableClass/index.jsx'
import RowClass   from './_examples/rowClass/index.jsx'
import Extra      from './_examples/extra/index.jsx'
import OnRowClick from './_examples/onRowClick/index.jsx'
import Pager      from './_examples/pager/index.jsx'
import StorageKey from './_examples/storageKey/index.jsx'
import Type       from './_examples/columns/type/index.jsx'
import Label      from './_examples/columns/heading/index.jsx'
import Display    from './_examples/columns/display/index.jsx'
import ClassName  from './_examples/columns/className/index.jsx'
import Align      from './_examples/columns/align/index.jsx'
import Sort       from './_examples/columns/sort/index.jsx'
import Filter     from './_examples/columns/filter/index.jsx'
import Text       from './_examples/column-type/text/index.jsx'
import Number     from './_examples/column-type/number/index.jsx'
import Currency   from './_examples/column-type/currency/index.jsx'
import Boolean    from './_examples/column-type/boolean/index.jsx'

const DataTableExamples = () =>
  <div className="flow">
    <h1>DataTable</h1>
    <DataTable/>
    <Sections tocName="datatable">
      <Heading title="Properties"/>
      <Rows/>
      <Columns/>
      <Color/>
      <TableClass/>
      <RowClass/>
      <Extra/>
      <Pager/>
      <StorageKey/>
      <Heading title="Column Properties"/>
      <Type/>
      <Label/>
      <ClassName/>
      <Align/>
      <Display/>
      <Filter/>
      <Sort/>
      <Heading title="Column Types"/>
      <Text/>
      <Number/>
      <Currency/>
      <Boolean/>
      <Heading title="Event Handlers"/>
      <OnRowClick/>
    </Sections>
  </div>

export default DataTableExamples