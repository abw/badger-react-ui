import React from 'react'
import Sortable from './Sortable.jsx'

export const VerticalSort = ({...props}) =>
  <Sortable
    {...props}
    direction="vertical"
  />

export default VerticalSort
