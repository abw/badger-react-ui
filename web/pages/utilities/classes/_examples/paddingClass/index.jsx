import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const PaddingClass = () =>
  <Example
    code="paddingClass"
    Component={Component}
    Source={Source}
  >
    <p>
      The <code>paddingClass</code> utility function can be used to construct
      a CSS class for adding padding.  If the value is true then the{' '}
      <code>pad</code> CSS class will be returned, adding a single unit (0.25rem)
      of padding to all sides of the element.
    </p>
    <p>
      If the value contains two whitespace delimited values then they are
      assumed to be vertical and horizontal padding values and a class of the
      form <code>pad-v-N pad-h-N</code> will be returned.
    </p>
    <p>
      If the value contains four whitespace delimited values then they are
      assumed to be padding values for the top, right, bottom and left edges.
      A CSS class of the form <code>pad-t-N pad-r-N pad-b-N pad-l-N</code> will
      be returned.
    </p>
    <p>
      In any other case the value will be prepended by <code>pad-</code>.
      A null or undefine value will return nothing.
    </p>
  </Example>

export default PaddingClass
