import React        from 'react'
import Values       from './Values.jsx'
import ValuesSrc    from './Values.jsx?raw'
import Separators   from './Separators.jsx'
import SepsSrc      from './Separators.jsx?raw'
import Complex      from './Complex.jsx'
import ComplexSrc   from './Complex.jsx?raw'
import Headings     from './Headings.jsx'
import HeadingsSrc  from './Headings.jsx?raw'
import Disabled     from './Disabled.jsx'
import DisabledSrc  from './Disabled.jsx?raw'
import Section      from '@/page/Section.jsx'
import Example      from '@/site/Example.jsx'

const Options = () =>
  <Section code="options">
    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        The <code>options</code> property should be used to define an array of
        options to display in the menu.
      </p>
      <p>
        For simple cases, each element in the array can be a text string or
        numerical value.
      </p>
    </div>
    <Example
      Component={Values}
      code={ValuesSrc}
      caption="options"
      expand={false}
      undent={2}
    />

    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        An element in the <code>options</code> array can also be an object.
        It should contain a <code>text</code> property which can be a
        string or JSX fragment. A <code>className</code> can be included to
        add a CSS class to the option.
      </p>
      <p>
        The content for an element is rendered using the <code>WithIcon</code>{' '}
        component from{' '}
        <a href="https://abw.github.io/badger-icon/">Badger Icon</a> allowing
        you to include <code>iconLeft</code> and <code>iconRight</code> properties
        to add icons to either side, along with <code>iconLeftClass</code> and{' '}
        <code>iconRightClass</code> to set CSS classes for those icons.
      </p>
    </div>
    <Example
      Component={Complex}
      code={ComplexSrc}
      caption="options"
      expand={false}
      undent={2}
    />

    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        An object in the <code>options</code> array can have a{' '}
        <code>disabled</code> property set to <code>true</code> to disable
        the option.
      </p>
    </div>
    <Example
      Component={Disabled}
      code={DisabledSrc}
      caption="options"
      expand={false}
      undent={2}
    />

    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        An object in the <code>options</code> array can have a{' '}
        <code>separator</code> property set to <code>true</code> to create
        a separator.
      </p>
    </div>
    <Example
      Component={Separators}
      code={SepsSrc}
      caption="options"
      expand={false}
      undent={2}
    />

    <div className="cols-2 stack-desktop mar-b-4">
      <p>
        An object in the <code>options</code> array can have a{' '}
        <code>heading</code> property to create a section heading.
      </p>
    </div>
    <Example
      Component={Headings}
      code={HeadingsSrc}
      caption="options"
      expand={false}
      undent={2}
    />
  </Section>

export default Options