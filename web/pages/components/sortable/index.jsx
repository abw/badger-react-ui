import React      from 'react'
import Heading    from '@/web/page/Heading.jsx'
import Sections   from '@/web/page/Sections.jsx'
import Section    from '@/web/page/Section.jsx'
import Split      from '@/web/site/Split.jsx'
import Sortable   from './_examples/Sortable/index.jsx'
import Vertical   from './_examples/Vertical/index.jsx'
import Horizontal from './_examples/Horizontal/index.jsx'
import MakeSortable from './_examples/MakeSortable/index.jsx'

const SortableExamples = () =>
  <div className="flow">
    <h1>Sortable</h1>
    <Sortable/>
    <h1>Vertical Sort</h1>
    <Vertical/>
    <h1>Horizontal Sort</h1>
    <Horizontal/>
    <h1>MakeSortable</h1>
    <MakeSortable/>
    <Sections tocName="sortable">
      <Split>
        <div className="flow">
          <Heading title="Properties"/>
          <Section code="items">
            An array of items to sort.  Each should be an object which must
            contain an <code>id</code> property to uniquely identify it.
          </Section>
          <Section code="Item">
            A component used to render each item.  It will be passed an{' '}
            <code>item</code> from the list of items, <code>setNodeRef</code>{' '}
            which must be added to the generate element via the <code>ref</code>{' '}
            property, a <code>style</code> object containing style,
            <code>listeners</code> and other <code>props</code> which should be
            added to the element.
          </Section>
          <Section code="setOrder">
            A function which will be called when the order of items changes.
            It will be pass an array containing the <code>items</code> in the
            new order.
          </Section>
        </div>
      </Split>
    </Sections>
  </div>

export default SortableExamples