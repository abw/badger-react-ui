import React   from 'react'
import Context from './Context.js'

const SearchError = ({
  error,
  resultsClass='menu border bdr-1',
  errorClass='error item no-hover',
}) =>
  <div className={resultsClass}>
    <div className={errorClass}>
      {error}
    </div>
  </div>

export default Context.Consumer(SearchError)
