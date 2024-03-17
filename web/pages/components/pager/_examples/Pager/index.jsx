import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Pager = () =>
  <>
    <p className="large">
      The <code>Pager</code> component generates buttons for navigating
      through several pages.
    </p>
    <p>
      The three mandatory properties are <code>pages</code> indicating
      the total number of pages, <code>page</code> for the current page
      index (ranging from 0 to <code>pages</code> - 1) and a{' '}
      <code>setPage</code> handler to set the page index.
    </p>
    <Example
      Component={Component}
      code={Source}
      // expand
    />
  </>

export default Pager