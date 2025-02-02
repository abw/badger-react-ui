const widths = [
  0, 1, 2, 3, 4, 5, 6, 8, 10
]

type BorderSelectProps = {
  border?: string
  setBorder: (border?: string) => void
  disabled: boolean
}

const BorderSelect = ({
  border,
  setBorder,
  disabled=false
}: BorderSelectProps) =>
  <select
    name="border"
    required
    value={border}
    onChange={ e => setBorder(e.target.value) }
    disabled={disabled}
  >
    <option value="" hidden disabled selected>Border</option>
    <option value="">Default</option>
    { widths.map(
      width =>
        <option
          key={width}
          value={width}
        >
          {width}
        </option>
    )}
  </select>

export default BorderSelect