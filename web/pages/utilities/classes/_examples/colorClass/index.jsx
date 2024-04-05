import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const colorClass = () =>
  <Example
    code="colorClass"
    Component={Component}
    Source={Source}
  >
    <p>
      The <code>colorClass</code> utility function can be used to construct
      a CSS class for defining colors.  The format for the argument is a color
      range name optionally followed by one to four color stop numbers,
      separated by hyphens.  The first number is the foreground color stop,
      used to add an <code>fgc-N</code> CSS class. The second in the background
      color stop, adding a <code>bgc-N</code> class.  The third and fourth numbers
      are the foreground and background color stops in dark mode, adding {' '}
      <code>fgd-N</code> and <code>bgd-N</code> classes respectively.

    </p>
  </Example>

export default colorClass
