import { ListSource, splitList } from '@abw/badger-utils'
import { PropsObject } from '../types'

export const anyPropsChanged = (
  props: ListSource,
  newProps: PropsObject,
  oldProps: PropsObject
) =>
  splitList(props).find(
    key => newProps[key as string] !== oldProps[key as string]
  )

