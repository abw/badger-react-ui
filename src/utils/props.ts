import { splitList } from '@abw/badger-utils'

export const anyPropsChanged = (props, newProps, oldProps) =>
  splitList(props).find(
    key => newProps[key] !== oldProps[key]
  )

