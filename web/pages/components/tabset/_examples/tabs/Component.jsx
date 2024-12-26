import { Tabset } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Tabset } from '@abw/badger-react-ui

const TabContent = ({ tab }) =>
  <div className="border pad-2 mar-t-2">
    This is a component for
    rendering {tab.otherData}
  </div>

const TabsetExample = () => {
  const tabs = [
    {
      text: 'One',
      iconLeft: 'asterisk',
      content: 'This is one'
    },
    {
      text: 'Two',
      iconRight: 'cog',
      content: <div className="border pad-2 mar-t-2">This is two</div>
    },
    {
      icon: 'heart',
      otherData: 'the heart tab',
      Component: TabContent
    },
    {
      icon: 'thumb-down',
      disabled: true
    }
  ]

  return (
    <Tabset
      lined
      tabs={tabs}
    />
  )
}

export default TabsetExample