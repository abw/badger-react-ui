import { ReactNode } from 'react'
import { maybeFunction } from '@abw/badger-utils'
import { TableTdProps } from './types'

export const TableTd = ({
  text,
  ...props
}: TableTdProps) =>
  <td {...props}>
    { maybeFunction(text, props) as ReactNode }
  </td>

export default TableTd