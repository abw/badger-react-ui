import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const StorageKey = () =>
  <Example
    code="storageKey"
    Component={Component}
    Source={Source}
    highlightLines="2"
    expand
    undent={2}
  >
    <p>
      The <code>storageKey</code> property can be used to define a key
      for the tab state to be stored in local storage.  Try selecting the
      &quot;Eleven&quot; tab (it&apos;s one louder) in the example below
      and then reload the page.  You should see the tab selection preserved.
    </p>
    <p>
      The <code>storageKey</code> should usually be unique for each tabset
      in your web site.  e.g. a tabset on your home page could use{' '}
      <code>home-tabs</code> and a tabset on your &quot;Contact Us&quot; page
      could use <code>contact-tabs</code>.
    </p>
  </Example>

export default StorageKey
