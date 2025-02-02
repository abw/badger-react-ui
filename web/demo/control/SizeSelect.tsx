const sizes = [
  'smallest', 'smaller', 'small',
  'medium',
  'large', 'larger', 'largest',
  'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9', 'x10'
]

type SizeSelectProps = {
  size?: string
  setSize: (size?: string) => void
}

const SizeSelect = ({ size, setSize }: SizeSelectProps) =>
  <select
    name="size"
    required
    value={size}
    onChange={ e => setSize(e.target.value) }
  >
    <option value="" hidden disabled selected>Size</option>
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

export default SizeSelect