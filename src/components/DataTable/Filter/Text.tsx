import React from 'react'

const Text = ({
  value,
  setFilter,
  type='text',
  placeholder
}) =>
  <input
    type={type}
    value={value ?? ''}
    onChange={e => setFilter(e.target.value)}
    placeholder={placeholder}
  />

export default Text