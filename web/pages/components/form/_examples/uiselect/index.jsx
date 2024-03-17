import React      from 'react'
import Example    from '@/site/Example.jsx'
import Simple     from './Simple.jsx'
import SimpleSrc  from './Simple.jsx?raw'
import Search     from './Search.jsx'
import SearchSrc  from './Search.jsx?raw'
import Select     from './SelectValue.jsx'
import SelectSrc  from './SelectValue.jsx?raw'
import Section    from '@/page/Section.jsx'
import Link       from '@/ui/Link.jsx'

const UISelect = () =>
  <Section code="uiselect">
    <p>
      The field <code>type</code> property can be set to <code>uiselect</code>{' '}
      to use the <Link to="/components/select" text="Select"/> component.
    </p>
    <Example
      Component={Simple}
      code={SimpleSrc}
    />
    <p>
      You can define additional properties in the field that will be forwarded
      to the select component.  For example, the <code>search</code> property
      is set here to enable searching.
    </p>
    <Example
      Component={Search}
      code={SearchSrc}
    />
    <p>
      When an option is selected the default behaviour is to return the
      complete option.  This can be debugging panel in the previous example.
    </p>
    <p>
      You can use the <code>selectValue</code> property to
      define a function which will accept the option and return the relevant
      value from inside it.  This is shown in the next example which
      returns the <code>value</code> property from the option instead of the
      selected option object.
    </p>
    <Example
      Component={Select}
      code={SelectSrc}
    />
  </Section>

export default UISelect



