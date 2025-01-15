import { CheckboxState } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(`Checked: ${checked}`)}
  />

export default CheckboxStateExample