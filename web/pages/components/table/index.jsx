import React      from 'react'
import Heading    from '@/web/page/Heading.jsx'
import Sections   from '@/web/page/Sections.jsx'
import Table      from './_examples/Table/index.jsx'
import Rows       from './_examples/rows/index.jsx'
import HeadRows   from './_examples/headRows/index.jsx'
import FootRows   from './_examples/footRows/index.jsx'
import Headings   from './_examples/headings/index.jsx'
import Footings   from './_examples/footings/index.jsx'
import Columns    from './_examples/columns/index.jsx'
import ClassName  from './_examples/className/index.jsx'
import Border     from './_examples/border/index.jsx'
import Color      from './_examples/color/index.jsx'
import Compressed from './_examples/compressed/index.jsx'
import Expanded   from './_examples/expanded/index.jsx'
import Radius     from './_examples/radius/index.jsx'
import Shadow     from './_examples/shadow/index.jsx'
import Size       from './_examples/size/index.jsx'
import Wide       from './_examples/wide/index.jsx'
import Lined      from './_examples/lined/index.jsx'
import Celled     from './_examples/celled/index.jsx'
import Shaded     from './_examples/shaded/index.jsx'
import Striped    from './_examples/striped/index.jsx'
import Row        from './_examples/Row/index.jsx'
import HeadRow    from './_examples/HeadRow/index.jsx'
import FootRow    from './_examples/FootRow/index.jsx'

const TableExamples = () =>
  <div className="flow">
    <h1>Table</h1>
    <Table/>
    <Sections tocName="table">
      <Heading title="Data Properties"/>
      <Rows/>
      <HeadRows/>
      <Headings/>
      <FootRows/>
      <Footings/>
      <Heading title="Columns Mode"/>
      <Columns/>
      <Heading title="Styling Properties"/>
      <ClassName/>
      <Lined/>
      <Celled/>
      <Shaded/>
      <Striped/>
      <Wide/>
      <Size/>
      <Compressed/>
      <Expanded/>
      <Color/>
      <Border/>
      <Radius/>
      <Shadow/>
      <Heading title="Components"/>
      <Row/>
      <HeadRow/>
      <FootRow/>
    </Sections>
  </div>

export default TableExamples