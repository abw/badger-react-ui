import TableContent from './Content'
import { Themed } from '@/src/Theme'
import { TableProps } from './types.js'
import { hasValue } from '@abw/badger-utils'
import { expandTableColumns } from './Utils.js'
import {
  borderClass, classes, colorClass, radiusClass, shadowClass
} from '@/src/utils/classes'

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
  compact,
  compressed=compact,
  expanded,
  head, body, foot,
  Head, Body, Foot,
  HeadRow, BodyRow, FootRow,
  Rows, Row,
  columns,
  rows,
  Content=TableContent,
  ...props
}: TableProps) => {
  const cls = classes(
    className, size,
    colorClass(color),
    borderClass(border),
    radiusClass(radius),
    shadowClass(shadow),
    { celled, lined, shaded, striped, wide, compressed, expanded }
  )
  // TODO: morph columns
  // These are now handled by tableSectionProps
  //if (isArray(head)) {
  //  head = { rows: head }
  //}
  //if (isArray(body)) {
  //  body = { rows: body }
  //}
  //if (isArray(foot)) {
  //  foot = { rows: foot }
  //}
  if (hasValue(columns) && hasValue(rows)) {
    [head, body] = expandTableColumns(columns, rows)
  }
  const contentProps = {
    head, body, foot,
    Head, Body, Foot,
    Rows, Row, HeadRow, BodyRow, FootRow
  }

  return (
    <table className={cls} {...props}>
      <Content {...contentProps}/>
    </table>
  )
}

// export default Table
// import { Themer } from '@/src/Themer'

export const ThemedTable = Themed(Table)
// export const ThemedTable = Themer(Table)
// export default Themed(Table, 'Table')
export default ThemedTable
