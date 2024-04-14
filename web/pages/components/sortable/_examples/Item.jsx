import React      from 'react'
import Section    from '@/web/page/Section.jsx'

const Item = () =>
  <Section code="Item">
    A component used to render each item.  It will be passed an{' '}
    <code>item</code> from the list of items, <code>setNodeRef</code>{' '}
    which must be added to the generated element as the <code>ref</code>{' '}
    property, a <code>style</code> object containing styles which should be
    added as the <code>style</code> property, and a set of <code>listeners</code>{' '}
    which should also be added to the element. It will also receive any other
    custom properties that you pass to the <code>Sortable</code> component.
  </Section>

export default Item