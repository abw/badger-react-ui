import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Link       from '@/ui/Link.jsx'

const Search = () =>
  <Example
    code="search"
    Component={Component}
    Source={Source}
    // undent={2}
    // expand
  >
    <p>
      The field <code>type</code> property can be set to <code>search</code>{' '}
      to use the <Link to="/components/search" text="Search"/> component.
      You can define additional properties in the field that will be forwarded
      to the select component.  For example, see the <code>onSearch</code> handler
      defined below.
    </p>
    <p>
      When an option is selected the default behaviour is to return the
      complete option.  You can use the <code>selectValue</code> property to
      define a function which will accept the option and return the relevant
      value from inside it.  This is shown in the third field below which
      return the <code>value</code> property from the option instead of the
      select option object.
    </p>
  </Example>

export default Search