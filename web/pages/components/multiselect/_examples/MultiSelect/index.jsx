import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { SelectLink } from '@/web/site/Links.jsx'

const MultiSelect = () =>
  <>
    <p className="large">
      The <code>MultiSelect</code> component is a variation of the{' '}
      <SelectLink/> component that allow multiple items to be selected.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default MultiSelect