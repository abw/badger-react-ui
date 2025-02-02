import { IconLibrary } from '@/src/index'

export const icons = Object.keys(IconLibrary.icons)

type IconSelectProps = {
  icon?: string
  setIcon: (icon?: string) => void
  disabled?: boolean
}

const IconSelect = ({
  icon,
  setIcon,
  disabled=false
}: IconSelectProps) =>
  <select
    name="icon"
    required
    value={icon}
    onChange={ e => setIcon(e.target.value) }
    disabled={disabled}
  >
    <option value="" hidden disabled selected>Icon</option>
    <option value="">None</option>
    { icons.map(
      icon =>
        <option
          key={icon}
          value={icon}
        >
          {icon}
        </option>
    )}
  </select>

export default IconSelect