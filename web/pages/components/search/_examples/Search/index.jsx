import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Search = () =>
  <>
    <div className="cols-2 stack-desktop">
      <p>
        The <code>Search</code> component implements the familiar
        &quot;autocomplete&quot; functionality.
        The user starts typing and after a short debounce delay a set of
        results matching their input is displayed.
      </p>
      <p>
        The user can then click on a result or use the keyboard to navigate
        through the results.
      </p>
    </div>
    <Example
      Component={Component}
      code={Source}
      // expand
    />
  </>

export default Search