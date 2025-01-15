import React from 'react'
import { Form, Field, Debug } from '@/src/index'

const MultiSelectExample = () =>
  /* START */
  <Form>
    <Field
      name="animal"
      label="Animal"
      type="multiselect"
      options={[
        'Ant',
        'Badger',
        'Cat',
        'Dog',
        'Elephant'
      ]}
    />
    <Debug/>
  </Form>
  /* END */

export default MultiSelectExample