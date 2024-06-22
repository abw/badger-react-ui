import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import MinMax     from './MinMax.jsx'
import MinMaxSrc  from './MinMax.jsx?raw'
import DescTable  from '@/web/site/DescTable.jsx'

const Range = () =>
  <>
    <p className="large">
      The <code>Range</code> component implements a custom range input.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
    <p>
      The custom range component offers the same functionality as the native
      HTML and in addition, has additional display options.
    </p>
    <p>
      Another advantages of a custom range component over the native HTML
      element is that it supports a double-ended range where both the minimum
      and maximum value can be set.
    </p>
    <Example
      Component={MinMax}
      code={MinMaxSrc}
    />

    <h2>Context</h2>
    <p>
      A react context is created which provides the items listed below.
      Any other properties passed in to the component will also be
      accessible to child components.
    </p>
    <p>
      Custom components can be wrapped with the <code>RangeConsumer</code>{' '}
      higher order component to receive these items as properties.  Or you
      can use the <code>useRange</code> hook to access them.
    </p>
    <DescTable
      items={[
        ['value',         'The current input value.'],
      ]}
    />
  </>

export default Range