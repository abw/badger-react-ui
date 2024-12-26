import React         from 'react'
import Context       from './Context.js'
import SearchInput   from './Input.jsx'
import SearchResults from './Results.jsx'
import SearchError   from './Error.jsx'

const Content = ({
  results,
  error,
  onKeyDown,
  Input=SearchInput,
  Results=SearchResults,
  Error=SearchError,
}) =>
  <div className="search" onKeyDown={onKeyDown}>
    <Input/>
    { Boolean(error) &&
      <Error/>
    }
    { Boolean(results) &&
      <Results/>
    }
  </div>

export default Context.Consumer(Content)
