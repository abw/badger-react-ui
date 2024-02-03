import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Search = () =>
  <Example
    code="search"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>search</code> property can be set to enable searching of
      options.
    </p>
  </Example>

export default Search
