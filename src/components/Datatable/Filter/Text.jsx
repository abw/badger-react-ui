import React from 'react'

const Text = ({
  value,
  setFilter,
  type='text'
}) =>
  <input
    type={type}
    value={value ?? ''}
    onChange={e => setFilter(e.target.value)}
  />

export default Text