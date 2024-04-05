import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Storage = () =>
  <>
    <p className="large">
      The <code>Storage</code> utility can be used to manage local storage
      to persist UI options or other data.
    </p>
    <p>
      Call the <code>Storage</code> function with a unique key to create a
      local store.  Then call the <code>get</code> method on that object to
      fetch an item from the store, <code>set</code> to set the value for an
      item or <code>delete</code> to delete an item from the store.
    </p>
    <p>
      Store values can be complex data which will be automatically converted
      to and from JSON.
    </p>
    <p>
      Enter some details in the form below and click on the save button.
      The form values will then be stored in local storage.  Reload the
      browser page and you should see the values persist.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default Storage