import React   from 'react'
import Context from './Context.js'

const SearchNoResults = ({
  noResultsClass='none',
  noResults='No results'
}) =>
  <div className={noResultsClass}>
    {noResults}
  </div>

export default Context.Consumer(SearchNoResults)
