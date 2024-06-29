import React from 'react'
import { Form, Field, Debug } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <Form>
    <Field
      name="loudness"
      label="Loudness"
      type="range-min-max"
      default={[10,11]}
      max={11}
    />
    <Debug/>
  </Form>
  /* END */

export default RangeExample