import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { DetailsLink } from '@/site/Links.jsx'

const Accordion = () =>
  <>
    <p className="large">
      The <code>Accordion</code> component can be used to create a
      number of revealable sections.  It is implemented as a simple
      wrapper around the <DetailsLink/> component.
    </p>
    <p>
      Any properties other than those listed below will be forwarded on to
      the <DetailsLink/> component. For example, you can add the{' '}
      <code>border</code> and <code>lined</code> properties to set the
      appropriate styling.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default Accordion