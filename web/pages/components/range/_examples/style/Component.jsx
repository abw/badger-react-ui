import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  /* START */
  <Range
    showTicks
    step={10}
    style={{
      border: '1px solid #aaa',
      borderRadius: '2.5em',
      backgroundColor: '#eee',
      padding: '1.5em 1em',
      '--thumb-size': '2em',
      '--tick-length': '12px',
      '--tick-width': '2px',
      '--track-height': '0.75em',
      '--track-border-width': '3px',
      '--track-border': 'var(--green-40)',
      '--track-background': 'var(--green-90)',
      '--track-fill': 'var(--green-50)',
      '--track-dragging': 'var(--green-40)',
    }}
  />
  /* END */

export default RangeExample