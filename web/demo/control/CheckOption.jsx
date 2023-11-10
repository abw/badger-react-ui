import React from 'react'

const CheckOption = ({
  checked,
  toggle,
  label,
  disabled=false
}) =>
  <label className="checkbox border no-focus">
    <input
      type="checkbox"
      checked={checked}
      onChange={toggle}
      disabled={disabled}
    />
    {label}
  </label>

export default CheckOption