import React from 'react'
import TableHead from './Head.jsx'
import TableBody from './Body.jsx'
import TableFoot from './Foot.jsx'
import { borderClass, classes, colorClass, radiusClass, shadowClass } from '@/src/utils/classes.js'

/**
 * Generate an HTML table.
 *
 * @param {string} className A CSS class
 * @param {number} border Border width
 * @param {string} color The name of a color range
 * @param {integer} radius The border radius in multiples of 0.25rem
 * @param {integer} shadow A shadow depth
 * @param {string} size A CSS size class, e.g. large, small, etc.
 * @param {boolean} lined Add the lined CSS class
 * @param {boolean} celled Add the celled CSS class
 * @param {boolean} shaded Add the shaded CSS class
 * @param {boolean} striped Add the striped CSS class
 * @param {boolean} wide Add the wide CSS class
 * @param {boolean} compressed Add the compressed CSS class
 * @param {boolean} expanded Add the expanded CSS class
 * @param {Array} headings An array of table headings
 * @param {Array} rows An array of table rows
 * @param {Array} footings An array of table footers
 * @returns {ReactNode} A React element that renders a table.
 */

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
