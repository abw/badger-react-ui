import { Div } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Div } from '@abw/badger-react-ui

const DivExamples = () =>
  <div className="grid-1 gap-6">
    <Div inverse blue pad="1 2">
      Blue
    </Div>
    <Div color="red-30-80" flex space baseline pad="2" radius="2">
      <Div inverse green pad="1 2" radius="1">Green</Div>
      Red
      <Div inverse blue pad="1 2" radius="1">Blue</Div>
    </Div>
  </div>

export default DivExamples