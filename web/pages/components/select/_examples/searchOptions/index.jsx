import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const SearchOptions = () =>
  <Example
    code="searchOptions"
    Component={Component}
    Source={Source}
    highlightLines="15-21,37"
    expand
  >
    <p>
      You can define your own <code>searchOptions</code> function to search
      through the <code>options</code> and return matching results.
      The first argument passed is the search string.  The second argument
      is the array of options.  The function should filter the options and
      return those that match the search string according to whatever logic
      you care to implement.
    </p>
    <p>
      In this example we implement a search function which will match against
      the user&apos;s <code>name</code> or their <code>department</code>.
      Try entering <code>an</code>.  It will match Al<b>an</b>,
      and <b>An</b>ne by name, and also Brenda and Bruce from
      M<b>an</b>agement.

    </p>
  </Example>

export default SearchOptions
