import { HTMLTdAttrs, HTMLThAttrs } from './types'

export const foo = (props: HTMLThAttrs) =>
  <td {...props}>YAR</td>

export const bar = (props: HTMLTdAttrs) =>
  <th {...props}>YAR</th>
