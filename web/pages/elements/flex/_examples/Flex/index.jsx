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
    <p>
      Behind the scenes, using the <code>Flex</code> component is exactly the
      same as using the <DivLink/> component with a <code>flex</code> property.
      Also note that the properties listed below that set the <code>align-items</code> CSS
      property (<code>start</code>, <code>middle</code>, <code>baseline</code> and <code>end</code>)
      also apply when using grid layout.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Flex