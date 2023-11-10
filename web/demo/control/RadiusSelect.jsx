import React from 'react'

const radii = [
  0, 1, 2, 3, 4, 5, 6, 8, 10
]

const RadiusSelect = ({ radius, setRadius }) =>
  <select
    name="radius"
    required
    value={radius}
    onChange={ e => setRadius(e.target.value) }
  >
    <option value="" hidden disabled selected>Radius</option>
    <option value="">Default</option>
    { radii.map(
      radius =>
        <option
          key={radius}
          value={radius}
        >
          {radius}
        </option>
    )}
  </select>

export default RadiusSelect