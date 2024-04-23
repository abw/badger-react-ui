import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { DivLink } from '@/web/site/Links.jsx'

const Flex = () =>
  <>
    <p className="large">
      The <code>Flex</code> component is a shortcut for adding flex classes.
      It supports the same properties as the <DivLink/> component and some
      additional ones that are specific to flex layout.
    </p>
    <Example
      Component={Component}
      code={Source}
      // expand
    />
  </>

export default Flex