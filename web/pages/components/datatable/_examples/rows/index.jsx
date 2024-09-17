import React      from 'react'
import Section    from '@/page/Section.jsx'
import RowsSrc    from '../animals.js?raw'
import { Source } from '@abw/badger-website'

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
    <Source
      code={RowsSrc}
      language="js"
    />
  </Section>

export default Rows