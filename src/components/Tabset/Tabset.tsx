import React from 'react'
import TabBody from './Body'
import WithIcons from '@/components/Icon/WithIcons'
import Storage from '@/src/utils/storage'
import { classes } from '@/src/utils/classes'
import { doNothing } from '@abw/badger-utils'
import { Themed }    from '@/src/Theme'
import { TabsetType } from './types'

const Tabset: TabsetType = ({
  tabs,
  storageKey,
  storageItem='active-tab',
  tabsetClass='tabset',
  tabsClass='tabs',
  activeClass='active',
  disabledClass='disabled',
  className,
  bodyClass,
  color,
  size,
  solid,
  lined,
  center,
  right,
  activeTab=0,
  Body=TabBody
}) => {
  const store = storageKey && Storage(storageKey)
  const [active, setActive] = React.useState(
    store
      ? store.get(storageItem) || activeTab
      : activeTab
  )
  const activateTab = (n: number) => {
    setActive(n)
    if (store) {
      store.set(storageItem, n)
    }
  }
  const setClass = classes(
    tabsetClass, className, color, size,
    { solid, lined, center, right}
  )
  const tabClass = classes(
    tabsClass, color, size,
  )

  return (
    <div className={setClass}>
      <ul className={tabClass}>
        { tabs.map(
          (tab, n) =>
            <li
              key={tab.id || n}
              className={
                classes({
                  [activeClass]: active === n,
                  [disabledClass]: tab.disabled
                })
              }
              onClick={
                () => tab.disabled
                  ? doNothing
                  :  activateTab(n)
              }
            >
              <WithIcons {...tab}/>
            </li>
        )}
      </ul>
      <div className={bodyClass}>
        <Body
          tabs={tabs}
          active={active}
          tab={tabs[active]}
        />
      </div>
    </div>
  )
}

export default Themed(Tabset, 'Tabset')