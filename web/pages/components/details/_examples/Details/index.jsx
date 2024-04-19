import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { AccordionLink } from '@/site/Links.jsx'

const Details = () =>
  <>
    <p className="large">
      The <code>Details</code> component displays a summary with
      revealable content.  See also the <AccordionLink/> component
      which creates a joined collection of them.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Details