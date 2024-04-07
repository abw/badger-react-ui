import React from 'react'
import TabBody from './Body.jsx'
import WithIcons from '@/components/Icon/WithIcons.jsx'
import Storage from '@/src/utils/storage.js'
import { classes } from '@/src/utils/classes.js'
import { doNothing } from '@abw/badger-utils'

const Tabset = ({
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
  Body=TabBody
}) => {
  const store = storageKey && Storage(storageKey)
  const [active, setActive] = React.useState(
    store
      ? store.get(storageItem) || 0
      : 0
  )
  const activateTab = n => {
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

export default Tabset