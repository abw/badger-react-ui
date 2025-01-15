import React from 'react'
import { Form, Field, Debug } from '@/src/index'

const RangeExample = () =>
  /* START */
  <Form>
    <Field
      name="loudness"
      label="Loudness"
      type="range-min"
      default={10}
      max={11}
    />
    <Debug/>
  </Form>
  /* END */

export default RangeExample