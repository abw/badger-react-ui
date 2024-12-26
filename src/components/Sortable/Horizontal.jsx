import React from 'react'
import Sortable from './Sortable.jsx'

export const HorizontalSort = ({...props}) =>
  <Sortable
    {...props}
    direction="horizontal"
  />

export default HorizontalSort
