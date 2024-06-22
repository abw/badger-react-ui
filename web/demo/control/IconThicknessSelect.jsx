import React from 'react'

const thicknesses = [
  'thinnest', 'thinner', 'thin', 'thick', 'thicker', 'thickest'
]

const IconThicknessSelect = ({ thickness, setThickness }) =>
  <select
    name="thickness"
    required
    value={thickness}
    onChange={ e => setThickness(e.target.value) }
  >
    <option value="" hidden disabled selected>Thickness</option>
    <option value="">Default</option>
    { thicknesses.map(
      thickness =>
        <option
          key={thickness}
          value={thickness}
        >
          {thickness}
        </option>
    )}
  </select>

export default IconThicknessSelect