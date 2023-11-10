import React from 'react'

export const colors = [
  'red',
  'brown',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'indigo',
  'violet',
  'purple',
  'pink',
  'maroon',
]


const ColorSelect = ({
  color,
  setColor,
  disabled=false
}) =>
  <select
    name="color"
    required
    value={color}
    onChange={ e => setColor(e.target.value) }
    disabled={disabled}
  >
    <option value="" hidden disabled selected>Color</option>
    <option value="">Default</option>
    { colors.map(
      color =>
        <option
          key={color}
          value={color}
        >
          {color}
        </option>
    )}
  </select>

export default ColorSelect