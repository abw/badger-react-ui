import { maybeFunction } from '@abw/badger-utils'

export type DebugFunction = (format: string, ...args: unknown[]) => void
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
  return (format: string, ...args: unknown[]) => console.log(
    `%c${prefix}%c${format}`, `color: ${color}`, 'color:black',
    ...args
  )
}
