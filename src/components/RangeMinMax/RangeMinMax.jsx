import React   from 'react'
import Context from './Context.js'
import RangeContent from './Content.jsx'
import { Themed } from '@/src/Theme.jsx'

const RangeMinMax = ({
  Content=RangeContent,
  children,
  ...props
}) =>
  <Context.Provider {...props}>
    <Content>
      {children}
    </Content>
  </Context.Provider>

const ThemedRangeMinMax = Themed(RangeMinMax, 'RangeMinMax')
export default ThemedRangeMinMax

