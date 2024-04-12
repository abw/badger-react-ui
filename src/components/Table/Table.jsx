import React from 'react'
import TableHead from './Head.jsx'
import TableBody from './Body.jsx'
import TableFoot from './Foot.jsx'
import { borderClass, classes, colorClass, radiusClass, shadowClass } from '@/src/utils/classes.js'

const Table = ({
  className,
  border,
  color,
  radius,
  shadow,
  size,
  lined,
  celled,
  shaded,
  striped,
  wide,
  compressed,
  expanded,
  headings,
  rows,
  footings,
  bodyRows = rows,
  headRows = headings && [headings],
  footRows = footings && [footings],
  Head=TableHead,
  Body=TableBody,
  Foot=TableFoot,
  ...props
}) => {
  const cls = classes(
    className, size,
    colorClass(color),
    borderClass(border),
    radiusClass(radius),
    shadowClass(shadow),
    { celled, lined, shaded, striped, wide, compressed, expanded }
  )
  return (
    <table className={cls}>
      { Boolean(headRows) &&
        <Head headRows={headRows} {...props}/>
      }
      <Body bodyRows={bodyRows} {...props}/>
      { Boolean(footRows) &&
        <Foot footRows={footRows} {...props}/>
      }
    </table>
  )
}

export default Table
