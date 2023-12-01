import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OnSearch = () =>
  <Example
    code="onSearch"
    Component={Component}
    Source={Source}
    // expand
  >
    <p>
      You should provide an <code>onSearch</code> function which will be
      passed the search input and should return an array of results.  This
      can be an asynchronous function if necessary.  For example, a function
      which makes an API request to fetch the matching results.
    </p>
  </Example>

export default OnSearch
