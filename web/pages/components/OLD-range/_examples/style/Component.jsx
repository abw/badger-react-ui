import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <Range
    showTicks
    step={10}
    style={{
      border: '1px solid #aaa',
      borderRadius: '0.25em',
      backgroundColor: '#eee',
      padding: '2em 1em',
      '--thumb-size': '2em',
      '--tick-length': '12px',
      '--tick-width': '3px',
      '--track-height': '0.75em',
      '--track-border-width': '3px',
      '--track-border': 'var(--blue-80)',
      '--track-background': 'var(--blue-90)',
      '--track-fill': 'var(--teal-50)',
    }}
  />
  /* END */

export default RangeExample