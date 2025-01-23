import { maybeFunction } from '@abw/badger-utils'

export type DebugConfigFunction = (...args: unknown[]) => string
export type DebugConfigOption = undefined | string | DebugConfigFunction
export type DebugOptions = {
  debug?: boolean,
  debugPrefix?: DebugConfigOption,
  debugColor?:  DebugConfigOption,
}

export const debugDefaultProps = {
  debug: false,
}

export function debugFunction(props: DebugOptions) {
  const debug  = props.debug
  const prefix = maybeFunction(props.debugPrefix, props)
  const color  = maybeFunction(props.debugColor, props)
  if (! debug)  { return () => { } }
  if (! prefix) { return console.log.bind(console) }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (format: string, ...args: any[]) => console.log(
    `%c${prefix}%c${format}`, `color: ${color}`, 'color:black',
    ...args
  )
}
