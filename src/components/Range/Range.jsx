import React   from 'react'
import Context from './Context.js'
import RangeContent from './Content.jsx'
import { Themed } from '@/src/Theme.jsx'

const Range = ({
  Content=RangeContent,
  ...props
}) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

const ThemedRange = Themed(Range, 'Range')
export default ThemedRange