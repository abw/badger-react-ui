import { Theme, Select, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Theme, Select, Button } from '@abw/badger-react-ui

const BorderClassExamples = () => {
  const myTheme = {
    Select: {
      placeholder: 'Pick one'
    },
    Button: {
      color: 'green',
      iconRight: 'check'
    }
  }
  return (
    <Theme.Provider {...myTheme}>
      <Select
        options={[
          { value: 10, text: 'ten'    },
          { value: 11, text: 'eleven' },
        ]}
      />
      <div className="flex space mar-t-2">
        <Button text="OK"/>
        <Button text="Not OK" color="red" iconRight="thumb-down"/>
      </div>
    </Theme.Provider>
  )
}

export default BorderClassExamples