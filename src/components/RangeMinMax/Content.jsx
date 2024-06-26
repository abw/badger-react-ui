import React from 'react'
import Context from './Context.js'
import DefaultLayout from './Layout.jsx'

const Content = ({
  rangeProps,
  Layout=DefaultLayout,
  children
}) =>
  <div {...rangeProps}>
    { children
      ? <Context.Children>
          {children}
        </Context.Children>
      : <Layout/>
    }
  </div>

export const RangeMinMaxContent = Context.Consumer(Content)
export default RangeMinMaxContent
