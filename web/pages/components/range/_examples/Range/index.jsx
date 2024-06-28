import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Extras     from './Extras.jsx'
import ExtrasSrc  from './Extras.jsx?raw'
import { RangeMaxLink, RangeMinLink } from '@/web/site/Links.jsx'

const Range = () =>
  <>
    <p className="large">
      The <code>Range</code> component implements a custom range input
      that allows you to set both a minimum and maximum value.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
    <p>
      It is similar to the native <code>range</code> HTML input
      with some additional functionality and display options.
      Furthermore, the custom component is <i>considerably</i> easier to
      style consistently across browsers.
    </p>
    <Example
      Component={Extras}
      code={ExtrasSrc}
      undent={2}
    />
    <p>
      The <RangeMaxLink/> and <RangeMinLink/> components are both implemented
      as wrappers around this component.
    </p>
  </>

export default Range