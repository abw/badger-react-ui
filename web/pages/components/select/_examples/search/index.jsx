import React      from 'react'
import Example    from '@/site/Example.jsx'
import Strings     from './Strings.jsx'
import StringsSrc  from './Strings.jsx?raw'
import Objects     from './Objects.jsx'
import ObjectsSrc  from './Objects.jsx?raw'
import Section    from '@/page/Section.jsx'

const Search = () =>
  <Section code="search">
    <p>
      The <code>search</code> property can be set to enable searching of
      options.  In the simple case this can work where the{' '}
      <code>options</code> are all strings.  The default search function
      will case-insensitively match options that contain all of the words
      entered in the search input.
    </p>
    <p>
      Try entering <code>aa an</code> in the search input in the
      example below. It will match options that contain both <code>aa</code>{' '}
      (e.g all the <b>Aa</b>rdvarks) and <code>an</code> (Al<b>an</b> Aardvark,{' '}
      <b>An</b>ne Aardvark and Bri<b>an</b> Badger).
    </p>
    <Example
      Component={Strings}
      code={StringsSrc}
      highlightLines="18"

    />
    <p>
      If the <code>options</code> are an array of objects then it will
      look for a <code>search</code>, <code>text</code>, <code>label</code>,{' '}
      <code>name</code> or <code>value</code> property in each object and
      use that.
    </p>
    <Example
      Component={Objects}
      code={ObjectsSrc}
      highlightLines="18"
    />
  </Section>

export default Search
