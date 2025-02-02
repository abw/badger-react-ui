const sizes = [
  1, 2, 3, 4, 5
]

type ShadowSelectProps = {
  shadow?: string
  setShadow: (shadow?: string) => void
}

const ShadowSelect = ({ shadow, setShadow }: ShadowSelectProps) =>
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