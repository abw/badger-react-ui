import React from 'react'
import { Example, SubSection } from '@abw/badger-website'

const ExampleSection = ({
  Component,
  Source,
  children,
  code,
  title,
  caption=code ? <code>{code}</code> : title,
  language,
  expand,
  undent,
  lineProps,
  highlightLines,
  ...props
}) =>
  <SubSection code={code} title={title} {...props}>
    <div className="mar-b-4">
      {children}
    </div>
    <Example
      Component={Component}
      code={Source}
      caption={caption}
      expand={expand}
      undent={undent}
      language={language}
      highlightLines={highlightLines}
      lineProps={lineProps}
    />
  </SubSection>

export default ExampleSection