const rotations = [
  'up', 'right', 'down', 'left'
]

type IconRotationSelectProps = {
  rotation?: string
  setRotation: (rotation?: string) => void
}
const IconRotationSelect = ({ rotation, setRotation }: IconRotationSelectProps) =>
  <select
    name="rotation"
    required
    value={rotation}
    onChange={ e => setRotation(e.target.value) }
  >
    <option value="" hidden disabled selected>Rotation</option>
    <option value="">Default</option>
    { rotations.map(
      rotation =>
        <option
          key={rotation}
          value={rotation}
        >
          {rotation}
        </option>
    )}
  </select>

export default IconRotationSelect