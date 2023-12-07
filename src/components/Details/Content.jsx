import React from 'react'

const Content = ({
  content,
  children,
  contentClass
}) =>
  <div className={contentClass}>
    {content||children}
  </div>

export default Content

