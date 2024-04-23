import React from 'react'
import { Div } from '@/src/index.jsx'

const Example = () =>
  /* START */
  <Div grid gap="6">
    <Div grid="2" gap="2">
      <Div inverse blue pad> A </Div>
      <Div inverse blue pad> B </Div>
    </Div>
    <Div grid="3" gap="2">
      <Div inverse violet pad> A </Div>
      <Div inverse violet pad> B </Div>
      <Div inverse violet pad> C </Div>
    </Div>
  </Div>
  /* END */

export default Example