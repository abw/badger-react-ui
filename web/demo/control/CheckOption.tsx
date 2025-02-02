type CheckOptionProps = {
  checked?: boolean
  toggle: () => void
  label: string
  disabled?: boolean
}

const CheckOption = ({
  checked,
  toggle,
  label,
  disabled=false
}: CheckOptionProps) =>
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