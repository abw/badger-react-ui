import React         from 'react'
import Context       from './Context.js'
import SearchInput   from './Input.jsx'
import SearchResults from './Results.jsx'
// import { Themed }   from '@/src/Theme.jsx'

const Content = ({
  results,
  onKeyDown,
  Input=SearchInput,
  Results=SearchResults,
  // ...props
}) =>
  <div className="search" onKeyDown={onKeyDown}>
    <Input/>
    { Boolean(results) &&
      <Results/>
    }
  </div>

export default Context.Consumer(Content)
