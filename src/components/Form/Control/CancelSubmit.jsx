import React      from 'react'
import Cancel     from './Cancel.jsx'
import Submit     from './Submit.jsx'
import { Themed } from '@/src/Theme.jsx'
import { flexGapSpaceClasses } from '@abw/badger-form'

const CancelSubmit = ({
  className,
  gap=4,
  space=false,
  size,
  cancel={},
  submit={}
}) =>
  <div
    className={flexGapSpaceClasses({ className, gap, space }, size, 'controls')}
  >
    <Cancel {...cancel}/>
    <Submit {...submit}/>
  </div>

export default Themed(CancelSubmit, 'CancelSubmit')
