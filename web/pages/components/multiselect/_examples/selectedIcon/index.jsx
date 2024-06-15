import React        from 'react'
import Name         from './Name.jsx'
import NameSrc      from './Name.jsx?raw'
import Object       from './Object.jsx'
import ObjectSrc    from './Object.jsx?raw'
import Section      from '@/page/Section.jsx'
import Example      from '@/site/Example.jsx'

const SelectedIconExamples = () =>
  <Section code="selectedIcon">
    <p>
      The <code>selectedIcon</code> property can be used to specify the icon
      displayed on the right of selected options.  The default value is{' '}
      <code>check</code>.
    </p>
    <Example
      Component={Name}
      code={NameSrc}
      caption="selectedIcon"
      highlightLines="8"
      expand={false}
    />
    <p>
      The value can be a string corresponding to the icon <code>name</code>, as
      shown in the previous example, or an object containing multiple properties.
    </p>
    <Example
      Component={Object}
      code={ObjectSrc}
      caption="selectedIcon"
      highlightLines="8-12"
      expand={false}
    />
  </Section>

export default SelectedIconExamples
