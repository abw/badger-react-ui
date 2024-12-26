import React from 'react'
import MakeSortable from './MakeSortable.jsx'

export const Sortable = props => {
  const { Context, Content } = MakeSortable(props)
  return (
    <Context>
      <Content/>
    </Context>
  )
}

export default Sortable
