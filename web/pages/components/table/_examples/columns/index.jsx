import React      from 'react'
import Example    from '@/site/Example.jsx'
import Section    from '@/web/page/Section.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import String     from './String.jsx'
import StringSrc  from './String.jsx?raw'

const Columns = () =>
  <Section code="columns">
    <p>
      The <code>columns</code> property switches the table renderer into
      columns mode.  In this case the <code>rows</code> should be an array
      of objects and the <code>columns</code> property is an object defining
      the columns that should be displayed.
    </p>
    <p>
      The keys in the <code>columns</code> should usually corresponding to
      keys in the <code>rows</code> objects.  The <code>head</code> property
      can be used to set the heading text.  This can be a text string or an
      object containing a <code>text</code> property and other attributes
      for the <code>th</code> heading cell (e.g. <code>className</code>)
    </p>
    <p>
      The default text for the body cell will be the value in the row
      corresponding to the column name.  e.g. for the <code>name</code> column
      the <code>row.name</code> will be displayed.  The <code>body</code>{' '}
      property can be set in a column definition to change this behaviour.
      It can be a function which will be passed a <code>row</code> property
      and should return the corresponding text.  Or it can be an object
      containing a <code>text</code> property to generate the text and any
      other attributes for the <code>td</code> element (e.g. <code>className</code>).
      The <code>th</code> property can be set to render the cell as a{' '}
      <code>th</code> element instead.
    </p>
    <Example
      Component={Component}
      code={Source}
      highlightLines="4-26,63"
    />
    <p>
      For simple cases you can specify the <code>columns</code> as an array
      of column names or a whitespace delimited string.  The column headings
      will be a capitalised version of the column name.
    </p>
    <Example
      Component={String}
      code={StringSrc}
      highlightLines="3"
      undent={2}
    />
  </Section>

export default Columns
