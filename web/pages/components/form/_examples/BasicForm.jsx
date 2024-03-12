import { Form, Field, Submit } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-react-ui

const FormExample = () =>
  <Form>
    <Field
      name="email"
      label="Email address"
      required
    />
    <Field
      name="password"
      label="Password"
      type="password"
      required
    />
    <div className="flex space start">
      <Field
        name="terms"
        type="checkbox"
        text="I like badgers"
        required
      />
      <Submit
        color="brand"
        iconLeft="user"
        iconRight="arrow-right"
        text="Login"
      />
    </div>
  </Form>

export default FormExample