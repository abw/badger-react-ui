import { stylePropsClasses } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { stylePropsClasses } from '@abw/badger-react-ui

const MyComponent = props => {
  const className = stylePropsClasses(props)
  return (
    <div className={className}>
      className: {className}
    </div>
  )
}

const StylePropsClassesExamples = () =>
  <div className="grid-1 gap-4">
    <MyComponent/>
    <MyComponent large/>
    <MyComponent inverse red pad="1 2"/>
    <MyComponent
      className="my-special-class"
      red border radius={2}
      shadow={2} padding="2 4"
    />
  </div>

export default StylePropsClassesExamples