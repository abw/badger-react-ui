import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OnSearch = () =>
  <Example
    code="onSearch"
    Component={Component}
    Source={Source}
    highlightLines="22-31,34"
    // expand
  >
    <p>
      You should provide an <code>onSearch</code> function which will be
      passed the search input and should return an array of results.  This
      can be an asynchronous function if necessary.  For example, a function
      which makes an API request to fetch the matching results.
    </p>
    <p>
      If your function throws an error (try entering &quot;throw&quot; as a
      search option) then it will be caught and displayed as an error.
    </p>
  </Example>

export default OnSearch
