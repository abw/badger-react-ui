import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Badge = () =>
  <>
    <p className="large">
      The <code>Badge</code> component can be used to render a badge.
      Any child elements will be included as content.
    </p>
    <p>
      There are numerous properties listed below that are typically used as
      shortcuts to set particular CSS styles.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default Badge