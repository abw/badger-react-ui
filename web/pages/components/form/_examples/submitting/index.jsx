import React       from 'react'
import Example     from '@/site/Example.jsx'
import Defaults    from './Defaults.jsx'
import DefaultsSrc from './Defaults.jsx?raw'
import Custom      from './Custom.jsx'
import CustomSrc   from './Custom.jsx?raw'
import Section     from '@/page/Section.jsx'
import { SpinnerLink } from '@/web/site/Links.jsx'

const Submitting = () =>
  <Section code="Submitting">
    <p>
      The <code>Submitting</code> component can be used to add an overlay
      with a <SpinnerLink/> and message
      when the form is submitting.
    </p>
    <Example
      Component={Defaults}
      code={DefaultsSrc}
      highlightLines="29"

    />
    <p>
      The <code>size</code> property can be used to set the overall size.
      The <code>spinnerSize</code> can be used to set the size of the spinner
      icon. The <code>text</code> property can be used to change the text
      displayed. All other properties are forwarded to the{' '}
      <SpinnerLink/> component.
    </p>
    <Example
      Component={Custom}
      code={CustomSrc}
      highlightLines="29-37"
    />
  </Section>

export default Submitting



