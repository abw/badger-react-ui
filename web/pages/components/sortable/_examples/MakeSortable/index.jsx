import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const MakeSortable = () =>
  <Example
    code="MakeSortable"
    Component={Component}
    Source={Source}
  >
    <p>
      The above components are implemented using <code>MakeSortable</code>.
    </p>
    <p>
      In most cases you don&apos;t need to worry about this.  However, if
      you&apos;re trying to render a sortable table then you may see React
      warnings telling you that a <code>div</code> element cannot appear as
      a child of a <code>tr</code> element or something similar.  The reason
      for this is that <a href="https://dndkit.com/">dnd kit</a> creates a{' '}
      <code>div</code> wrapper for the sortable context and it will put it
      wherever you&apos;ve inserted the <code>Sortable</code> component.
    </p>
    <p>
      The solution is to use <code>MakeSortable</code>, passing it all the
      options supported by <code>Sortable</code>.  It will return an object
      containing <code>Context</code> and <code>Content</code> components.
      Put the <code>Context</code> around the outside of your table and
      then insert the <code>Content</code> where you want the sortable items
      to appear.
    </p>
  </Example>

export default MakeSortable