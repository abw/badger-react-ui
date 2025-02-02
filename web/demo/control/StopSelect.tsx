import { range } from '@abw/badger-utils'

export const stops = range(0, 100, 5)

type StopSelectProps = {
  name: string
  stop?: string
  setStop: (stop?: string) => void
  disabled: boolean
}
const StopSelect = ({
  name,
  stop,
  setStop,
  disabled=false
}: StopSelectProps) =>
  <select
    name={name}
    required
    value={stop}
    onChange={ e => setStop(e.target.value) }
    disabled={disabled}
  >
    <option value="" hidden disabled selected>Select Stop</option>
    <option value="">None</option>
    { stops.map(
      s =>
        <option
          key={s}
          value={s}
        >
          {s}
        </option>
    )}
  </select>

export default StopSelect