import React        from 'react'
import Section      from '@/page/Section.jsx'
import RowsSrc      from '../data.js?raw'
import CodeBlock from '@/web/site/CodeBlock.jsx'

const Rows = () =>
  <Section code="rows">
    <p>
      The <code>rows</code> property is used to provide the data that
      you want to display.  It should be an array of objects.  The object
      can contain any data.
    </p>
    <p>
      In these examples we&apos;re using this data for the <code>rows</code>{' '}
      unless otherwise shown.
    </p>
    <div className="example">
      <div className="source">
        <CodeBlock
          code={RowsSrc}
          language="js"
        />
      </div>
    </div>

  </Section>

export default Rows