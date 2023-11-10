import React from 'react'

const sizes = [
  1, 2, 3, 4, 5
]

const ShadowSelect = ({ shadow, setShadow }) =>
  <select
    name="shadow"
    required
    value={shadow}
    onChange={ e => setShadow(e.target.value) }
  >
    <option value="" hidden disabled selected>Shadow</option>
    <option value="">Default</option>
    { sizes.map(
      size =>
        <option
          key={size}
          value={size}
        >
          {size}
        </option>
    )}
  </select>

export default ShadowSelect