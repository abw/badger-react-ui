import React from 'react'
import { Form, Field, Debug } from '@/src/index'

const MultiSelectExample = () =>
  /* START */
  <Form>
    <Field
      name="member"
      type="multiselect"
      label="Musician"
      value="david"
      selectValue={option => option.value}
      options={[
        { value: 'nigel', text: 'Nigel Tufnel' },
        { value: 'david', text: 'David St. Hubbins' },
        { value: 'derek', text: 'Derek Smalls' },
      ]}
    />
    <Debug/>
  </Form>
  /* END */

export default MultiSelectExample