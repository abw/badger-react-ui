import { ComponentType, ReactNode } from 'react'
import { WithIconsProps } from '../Icon'

export type TabsetComponentProps = {
  tab: Record<string, unknown>
}

export type TabsetTabType = WithIconsProps & {
  id?: string | number
  disabled?: boolean,
  content?: ReactNode
  Component?: ComponentType<TabsetComponentProps>
}

export type TabsetBodyProps = {
  tab: TabsetTabType
  tabs: TabsetTabType[]
  active: number
}

export type TabsetProps = {
  tabs: TabsetTabType[]
  className?: string
  color?: string
  size?: string
  activeClass?: string
  bodyClass?: string
  disabledClass?: string
  tabsClass?: string
  tabsetClass?: string
  storageKey?: string
  storageItem?: string
  solid?: boolean
  lined?: boolean
  center?: boolean
  right?: boolean
  activeTab?: number
  Body?: TabsetBodyType
}

export type TabsetBodyType = React.FC<TabsetBodyProps>
export type TabsetType = React.FC<TabsetProps>