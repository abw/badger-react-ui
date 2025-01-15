import { Form, Field, CancelSubmit } from '@/src/index'
import { sleep } from '@abw/badger-utils'

/* START */
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/badger-react-ui

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
    <CancelSubmit
      space
      size="smaller"
      cancel={{
        iconLeft: 'arrow-left',
        color: 'grey outline'
      }}
      submit={{
        iconRight: 'check',
        color: 'green'
      }}
    />
  </Form>

export default FormExample