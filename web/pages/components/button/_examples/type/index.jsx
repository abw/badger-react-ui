import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Split from '@/web/site/Split.jsx'

const Type = () =>
  <Example
    code="type"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <Split>
      <p>
        The default <code>type</code> for a button is set to <code>button</code>.
        In most cases this has no effect.  However, inside the scope of
        a <code>form</code> element, the <code>type</code> for a button
        would usually default to being <code>submit</code>.  When clicked,
        the button would submit the form.
      </p>
      <p>
        This behaviour usually surprises people (it certainly catches me out
        from time to time).  Having an explicit default button type prevents
        this from happening.  When you really do want to add a button to submit
        a form, you should explicitly set the <code>type</code> to{' '}
        <code>submit</code>.  You can also set it to <code>reset</code> to make
        a reset button for a form.
      </p>
    </Split>
  </Example>

export default Type