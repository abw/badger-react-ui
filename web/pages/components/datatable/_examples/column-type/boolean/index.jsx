import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Type = () =>
  <Example
    code="boolean"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>type</code> can be set to <code>boolean</code> for boolean
      values.  This will coerce non-boolean types to boolean vales so that
      numerical values 0 and 1, and strings &quot;0&quot; and &quot;1&quot; are
      correctly interpreted.
    </p>
    <p>
      Sorting on this column will put false values before true values.
      The filter for this column presents a drop-down menu with true and
      false values.
    </p>
    <p>
      The <code>trueText</code> and <code>falseText</code> properties can be
      set to define the text that should be displayed for true and false
      values respectively.  Otherwise it defaults to &quot;True&quot; and
      &quot;False&quot;.
    </p>
  </Example>

export default Type