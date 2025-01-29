import { DataTableFilterInputProps } from '../types'

const Text = ({
  value,
  setFilter,
  type='text',
  placeholder
}: DataTableFilterInputProps) =>
  <input
    type={type}
    value={String(value ?? '')}
    onChange={e => setFilter(e.target.value)}
    placeholder={placeholder}
  />

export default Text