 
import { Form, Field, ResetSubmit } from '@/src/index'
import { sleep } from '@abw/badger-utils'

/* START */
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-react-ui

const onSubmit = () => sleep(2000).then(
  () => ({ ok: 'All is good' })
)

const FormExample = () =>
  <Form
    className="relative"
    onSubmit={onSubmit}
  >
    <Field
      name="name"
      label="Your name"
      required
    />
    <ResetSubmit
      space
      size="smaller"
      cancel={{
        iconRight: 'undo',
        color: 'grey outline'
      }}
      submit={{
        iconRight: 'check',
        color: 'green'
      }}
    />
  </Form>

export default FormExample