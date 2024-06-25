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

export const RangeContent = Context.Consumer(Content)
export default RangeContent
