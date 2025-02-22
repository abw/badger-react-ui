import { ResetSubmitProps } from '../types.js'
import Reset      from './Reset.jsx'
import Submit     from './Submit.jsx'
import { Themed } from '@/src/Theme'
import { flexGapSpaceClasses } from '@abw/badger-form'

const ResetSubmit = ({
  className,
  gap=4,
  space=false,
  size,
  reset={},
  submit={}
}: ResetSubmitProps) =>
  <div
    className={flexGapSpaceClasses({ className, gap, space }, size, 'controls')}
  >
    <Reset  {...reset}/>
    <Submit {...submit}/>
  </div>

export default Themed(ResetSubmit, 'ResetSubmit')