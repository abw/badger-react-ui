import { ReactNode } from 'react'
import Context from './Context'

export const RangeDebug = Context.Consumer(
  ({
    min, max,
    minValue, maxValue,
    minNormal, maxNormal,
    minPercent, maxPercent,
    step, steps
  }) =>
    <table className="celled shaded grey smaller">
      <tbody>
        {/* {min} to {max} step:{step} steps:{steps} - value:{value} ({percent}%) */}
        {debugRow('minValue', minValue)}
        {debugRow('maxValue', maxValue)}
        {debugRow('minNormal', minNormal)}
        {debugRow('maxNormal', maxNormal)}
        {debugRow('minPercent', minPercent)}
        {debugRow('maxPercent', maxPercent)}
        {debugRow('min', min)}
        {debugRow('max', max)}
        {debugRow('step', step)}
        {debugRow('steps', steps)}
      </tbody>
    </table>
)

const debugRow = (key: string, value: ReactNode) =>
  <tr>
    <th className="font-mono split-3">{key}</th>
    <td>{value}</td>
  </tr>

export default RangeDebug
