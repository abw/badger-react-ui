import React from 'react'
import { Form, Field, Debug } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <Form>
    <Field
      name="loudness"
      label="Loudness"
      type="range-max"
      default={10}
      max={11}
    />
    <Debug/>
  </Form>
  /* END */

export default RangeExample