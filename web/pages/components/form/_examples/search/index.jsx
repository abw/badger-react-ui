import React      from 'react'
import Example    from '@/site/Example.jsx'
import Search     from './Search.jsx'
import SearchSrc  from './Search.jsx?raw'
import Select     from './SelectValue.jsx'
import SelectSrc  from './SelectValue.jsx?raw'
import Section    from '@/page/Section.jsx'
import { SearchLink } from '@/web/site/Links.jsx'

const SearchExamples = () =>
  <Section code="search">
    <p>
      The field <code>type</code> property can be set to <code>search</code>{' '}
      to use the <SearchLink/> component.
      You can define additional properties in the field that will be forwarded
      to the select component.  For example, see the <code>onSearch</code> handler
      defined below.
    </p>
    <Example
      Component={Search}
      code={SearchSrc}
      highlightLines="34-35"
    />

    <p>
      When an option is selected the default behaviour is to return the
      complete option, as shown in the first field in the example below.
      You can use the <code>selectValue</code> property to
      define a function which will accept the option and return the relevant
      value from inside it.  This is shown in the second field in the example
      below which returns the <code>value</code> property from the option
      instead of the selected option object.
    </p>
    <Example
      Component={Select}
      code={SelectSrc}
      highlightLines="46"
    />
  </Section>

export default SearchExamples