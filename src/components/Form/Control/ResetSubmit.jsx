import React      from 'react'
import Reset      from './Reset.jsx'
import Submit     from './Submit.jsx'
import { Themed } from '@/src/Theme.jsx'
import { flexGapSpaceClasses } from '@abw/badger-form'

const ResetSubmit = ({
  className,
  gap=4,
  space=false,
  size,
  reset={},
  submit={}
}) =>
  <div
    className={flexGapSpaceClasses({ className, gap, space }, size, 'controls')}
  >
    <Reset  {...reset}/>
    <Submit {...submit}/>
  </div>

export default Themed(ResetSubmit, 'ResetSubmit')