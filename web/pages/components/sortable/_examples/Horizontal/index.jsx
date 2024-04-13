import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Horizontal = () =>
  <>
    <p className="large">
      The <code>HorizontalSort</code> component works exactly the same but
      constricts the items to be sorted horizontally.  This is a shortcut
      for setting the <code>variant</code> property on <code>Sortable</code> to
      be <code>horizontal</code>.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Horizontal