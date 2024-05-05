import { themedProps } from '@/src/index.jsx'
import { Theme, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Theme, Button } from '@abw/badger-react-ui

const ThemedPropsExamples = () => {
  const ButtonActions = {
    add: {
      color: 'green',
      iconRight: 'plus',
      text: 'Add'
    },
    edit: {
      color: 'blue',
      iconRight: 'pen',
      text: 'Edit'
    },
    cancel: {
      color: 'grey outline',
      iconRight: 'cross',
      text: 'Cancel'
    },
  }
  const myTheme = {
    Button: props => themedProps(
      props, { action: ButtonActions }
    )
  }
  return (
    <Theme.Provider {...myTheme}>
      <div className="grid-1 gap-4">
        <div className="flex space">
          <Button action="add"/>
          <Button action="edit"/>
          <Button action="cancel"/>
        </div>
        <div className="flex space">
          <Button action="add" text="Add Comment"/>
          <Button action="edit" color="orange"/>
          <Button action="cancel" iconLeft="arrow-left"/>
        </div>
      </div>
    </Theme.Provider>
  )
}

export default ThemedPropsExamples