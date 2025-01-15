import React from 'react'
import { Form, Field, Debug, Submit } from '@/src/index'

const MultiSelectExample = () =>
  /* START */
  <Form>
    <Field
      name="badger"
      type="multiselect"
      label="Badger"
      search
      options={[
        { id: 1, name: 'Bella Badger', },
        { id: 2, name: 'Benjamin Badger', },
        { id: 3, name: 'Bethany Badger', },
        { id: 4, name: 'Billy Badger', },
        { id: 5, name: 'Bobby Badger', },
        { id: 6, name: 'Brenda Badger', },
        { id: 7, name: 'Brian Badger', },
        { id: 8, name: 'Brianna Badger', },
      ]}
    />
    <Submit/>
    <Debug/>
  </Form>
  /* END */

export default MultiSelectExample