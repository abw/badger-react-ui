import { SortingStrategy } from '@dnd-kit/sortable'
import { PropsWithChildren } from 'react'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'
import { DraggableAttributes, Modifier, UniqueIdentifier } from '@dnd-kit/core'

export type SortableDirection = 'default' | 'vertical' | 'horizontal'

export type SortableDirectionSpec = {
  modifiers: Modifier[],
  strategy: SortingStrategy,
}

export type SortableDirections = Record<
  SortableDirection,
  SortableDirectionSpec
>

export type SortableDataItem = {
  id: string | number
  moved?: boolean
  [key:string]: unknown
}

export type SortableListProps = PropsWithChildren<{
  [key:string]: unknown
}>

export type SortableItemProps<
  T extends SortableDataItem = SortableDataItem
> =
  DraggableAttributes & {
  item: T
  setNodeRef:  (node: HTMLElement | null) => void
  style: {
    transform: string | undefined;
    transition: string | undefined;
  }
  listeners?: SyntheticListenerMap
  [key:string]: unknown
}

export type SortableItemWrapperProps<
  T extends SortableDataItem = SortableDataItem
> = {
  id: UniqueIdentifier
  item: T
  Item: SortableItemComponent<T>
  [key:string]: unknown
}

export type SortableOverlayProps = {
  item?: SortableDataItem
  index?: number
  [key:string]: unknown
}

export type SortableProps<
  T extends SortableDataItem = SortableDataItem
> = {
  items: T[]
  setOrder: (items: T[]) => void
  List?: SortableListComponent
  Item: SortableItemComponent<T>
  direction?: SortableDirection
  options?: SortableDirectionSpec
  modifiers?: Modifier[]
  strategy?: SortingStrategy
  Overlay?: SortableOverlayComponent
  [key:string]: unknown
}

/*
export type SortableComponent<
  T extends SortableDataItem = SortableDataItem
> = React.FC<
  SortableProps<T>
>
*/

export type SortableListComponent = React.FC<SortableListProps>
export type SortableItemWrapperComponent = React.FC<SortableItemWrapperProps>
export type SortableOverlayComponent = React.FC<SortableOverlayProps>
export type SortableItemComponent<
  T extends SortableDataItem = SortableDataItem
> = React.FC<
  SortableItemProps<T>
>
