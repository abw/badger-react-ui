import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { ExternalLink } from '@/web/site/Links.jsx'

const ConvertCase = () =>
  <Example
    code="convertCase"
    Component={Component}
    Source={Source}
    highlightLines="3,6,8"
  >
    <p>
      The default behaviour for creating a setter name is to capitalise
      the first letter of the corresponding value.  For example, if you
      define a <code>badger</code> value then the setter will be{' '}
      <code>setBadger</code>.  However, it only capitalises the first letter,
      so if you have a value like <code>amplifier_volume</code> then the setter
      will be <code>setAmplifier_volume</code>.
    </p>
    <p>
      You can define your own <code>convertCase</code> function as an option.
      In this example, we use the{' '}
      <ExternalLink url="https://abw.github.io/badger-utils/text.html#snakeToStudly" text="snakeToStudly()"/>{' '}
      function from Badger Utils which fully converts the snake case value
      into studly caps, giving us a setter named <code>setAmplifierVolume</code>.
    </p>
    <p>
      Obviously this is a rather contrived example, but it can be useful
      if you&apos;re working with data sources that use snake case.
    </p>
  </Example>

export default ConvertCase
