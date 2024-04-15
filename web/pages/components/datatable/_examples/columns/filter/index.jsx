import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Filter = () =>
  <Example
    code="filter"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>filter</code> property can be used to implement custom
      filtering. If you try filtering the rows in the previous example you&apos;ll
      notice that it doesn&apos;t work.  It&apos;s for the same reason that
      we need to implement a custom <code>sort</code> function - there isn&apos;t
      a <code>name</code> column in the row data to filter on.
    </p>
    <p>
      The <code>filter</code> property lets us define a custom filter function
      to take care of it.  It is passed an object containing a{' '}
      <code>row</code> and the <code>search</code> value that it should filter
      on.  You can implement your own filter logic which should return a
      boolean value indicating if the row matches or not.  Or you can use one
      of the built in functions like <code>filterStringContains()</code> as
      shown in this example.  We just need to provide it with a <code>value</code>{' '}
      constructed as a composite of the <code>forename</code> and <code>surname</code> fields
      in the <code>row</code>.  It will look for the <code>search</code> appearing
      anywhere in the <code>value</code> string in a case insensitive manner.
    </p>
    <p>
      There&apos;s also the <code>filterStringExact()</code> function which
      performs an exact string match.  The <code>filterInteger()</code> and{' '}
      <code>filterFloat()</code> functions filter integer and floating point values
      respectively and they take care of the coercing string values (such as
      those entered into the search input) into the appropriate types.
      The <code>filterBoolean()</code> can be used for filter boolean values
      and will also perform the appropriate type coercion.
    </p>
  </Example>

export default Filter