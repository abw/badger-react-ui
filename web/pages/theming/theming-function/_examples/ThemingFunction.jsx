import { Theme, Button } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { Theme, Button } from '@abw/badger-react-ui

const ThemingFunctionExample = () => {
  const ButtonVariants = {
    add: {
      color: 'green',
      iconRight: 'plus',
      text: 'Add'
    },
    edit: {
      color: 'blue',
      iconRight: 'pen',
      text: 'Add'
    },
    cancel: {
      color: 'grey outline',
      iconRight: 'cross',
      text: 'Cancel'
    },
  }
  const myTheme = {
    Button: props => {
      const variant = ButtonVariants[props.variant] || { }
      return { ...variant, ...props }
    }
  }
  return (
    <Theme.Provider {...myTheme}>
      <div className="grid-1 gap-4">
        <div className="flex space">
          <Button variant="add"/>
          <Button variant="edit"/>
          <Button variant="cancel"/>
        </div>
        <div className="flex space">
          <Button variant="add" text="Add Comment"/>
          <Button variant="edit" color="orange"/>
          <Button variant="cancel" iconLeft="arrow-left"/>
        </div>
      </div>
    </Theme.Provider>
  )
}

export default ThemingFunctionExample