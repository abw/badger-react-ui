import React   from 'react'
import Context from './Context.js'

const SearchNoResults = ({
  noResultsClass='no-results'
}) =>
  <div className={noResultsClass}>
    No results
  </div>

export default Context.Consumer(SearchNoResults)
