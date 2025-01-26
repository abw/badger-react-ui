import { DropdownMenu } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { DropdownMenu } from '@abw/badger-react-ui

const DropdownExample = () => {
  return (
    <div className="flex space">
      <DropdownMenu
        text='Dropdown Menu'
        iconRight="angle-down"
        options={[
          'Alan Aardvark',
          'Amy Aardvark',
          'Anne Aardvark',
          'Bart Badger',
          'Betty Badger',
          'Bobby Badger',
          'Brenda Badger',
          'Brian Badger',
          'Colin Camel',
          'David Donkey',
          'Eddie Elephant',
          'Franky Ferret',
          'Gina Goat',
          'Helen Horse',
          'Ian Iguana',
          'Juliet Jackdaw',
          'Kevin Kangaroo',
          'Linda Llama',
          'Mike Monkey',
          'Nerys Narwhal',
          'Oliver Octopus',
          'Penny Panda',
          'Quentin Quail',
          'Roger Raccoon',
          'Simon Stoat',
          'Terry Tiger',
          'Ursula Unicorn',
          'Violet Vole',
          'Willy Wombat',
          'Xerces Xenus',
          'Yvonne Yaz',
          'Zebedee Zebra',
        ]}
      />
      <DropdownMenu
        icon="bars"
        right
        button
        offset="3"
        triggerColor="brand"
        options={[
          'Badger',
          'Mushroom',
          'Snake'
        ]}
      />
    </div>
  )
}

export default DropdownExample