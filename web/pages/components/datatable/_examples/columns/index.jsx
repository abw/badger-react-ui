import React          from 'react'
import String         from './String.jsx'
import StringSrc      from './String.jsx?raw'
import Array          from './Array.jsx'
import ArraySrc       from './Array.jsx?raw'
import ArrayField     from './ArrayField.jsx'
import ArrayFieldSrc  from './ArrayField.jsx?raw'
import ArrayObj       from './ArrayObj.jsx'
import ArrayObjSrc    from './ArrayObj.jsx?raw'
import Object         from './Object.jsx'
import ObjectSrc      from './Object.jsx?raw'
import Section        from '@/page/Section.jsx'
import Example        from '@/site/Example.jsx'

const Columns = () =>
  <Section code="columns">
    <p>
      The <code>columns</code> property is used to define which properties
      in the <code>rows</code> you want to display.
    </p>
    <p>
      For simple cases this can be a string containing a whitespace delimited
      list of properties.
    </p>
    <Example
      Component={String}
      code={StringSrc}
      caption="columns"
      highlightLines="4"
      expand={false}
      undent={2}
    />
    <p>
      The string format is short-hand for specifying an array of strings.
    </p>
    <Example
      Component={Array}
      code={ArraySrc}
      caption="columns"
      highlightLines="4-9"
      expand={false}
      undent={2}
    />

    <p>
      When a column is defined as a string it is &quot;upgraded&quot; to
      an object in which the string is the <code>field</code> property.
      This should (usually) correspond to a property in each row that
      you want to display in the column.
    </p>
    <Example
      Component={ArrayField}
      code={ArrayFieldSrc}
      caption="columns"
      highlightLines="4-9"
      expand={false}
      undent={2}
    />

    <p>
      The column object will be augmented with some additional properties:{' '}
      <code>id</code> (the same value as the field, for sorting purposes),{' '}
      <code>heading</code> (or <code>label</code>) used as the column heading
      and defaulting to a capitalised version of the <code>field</code>,
      and <code>type</code> defaulting to <code>text</code>.
    </p>
    <p>
      You can define different values for <code>heading</code> and
      <code>type</code> (along with other properties{' '}
      <a href="#column-properties">detailed below</a>).
    </p>
    <p>
      In this example we set the <code>type</code> of the
      first column to be <code>number</code>.  If you click on the{' '}
      <code>Id</code> column heading in one of the previous example, you
      can see that it&apos;s sorting the rows alphabetically, e.g.{' '}
      10, 101, 102, 103, 11, 12, etc.  Setting the column type to{' '}
      <code>number</code>, as shown in the next example, fixes this problem
      and the rows will be sorted numerically, e.g. 10, 11, 12, 13, 14, 20,
      etc.
    </p>

    <Example
      Component={ArrayObj}
      code={ArrayObjSrc}
      caption="columns"
      highlightLines="4-9"
      expand={false}
      undent={2}
    />

    <p>
      The final option is to define the columns as an object in which the
      keys are the field names and the values contain additional configuration
      options for the column.  These can be defined as empty objects or a
      true value if you&apos;re happy with the default values for{' '}
      <code>heading</code> and <code>type</code>.  You can also explicitly set
      a column to <code>false</code> if you don&apos;t want it displayed.
    </p>

    <Example
      Component={Object}
      code={ObjectSrc}
      caption="columns"
      highlightLines="4-9"
      expand={false}
      undent={2}
    />

    <p>
      See the <a href="#column-properties">Column Properties</a> section
      below for further information about the properties that can be added
      to the <code>columns</code>.
    </p>
  </Section>

export default Columns