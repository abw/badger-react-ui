import { ReactNode } from 'react'
import { maybeFunction } from '@abw/badger-utils'
import { TableThProps } from './types'

export const TableTh = ({
  text,
  ...props
}: TableThProps) =>
  <th {...props}>
    { maybeFunction(text, props) as ReactNode }
  </th>

export default TableTh