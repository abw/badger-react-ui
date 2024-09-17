import React from 'react'
import Section from './Section.jsx'
import { Example } from '@abw/badger-website'

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
  <Section code={code} title={title} {...props}>
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
  </Section>

export default ExampleSection