import React      from 'react'
import Heading    from '@/web/page/Heading.jsx'
import Sections   from '@/web/page/Sections.jsx'
import Sortable   from './_examples/Sortable/index.jsx'
import Vertical   from './_examples/Vertical/index.jsx'
import Horizontal from './_examples/Horizontal/index.jsx'
import MakeSortable from './_examples/MakeSortable/index.jsx'
import Items        from './_examples/items.jsx'
import Item         from './_examples/Item.jsx'
import SetOrder     from './_examples/setOrder.jsx'

const SortableExamples = () =>
  <div className="flow">
    <h1>Sortable</h1>
    <Sortable/>
    <Sections tocName="sortable">
      <Heading title="Properties"/>
      <Items/>
      <Item/>
      <SetOrder/>
      <Heading title="Components"/>
      <Vertical/>
      <Horizontal/>
      <MakeSortable/>
    </Sections>
  </div>

export default SortableExamples