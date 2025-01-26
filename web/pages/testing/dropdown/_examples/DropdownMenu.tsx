import React from 'react'
import { DropdownMenu } from '@/src/index'

const options = [
  { heading: 'This is a Heading' },
  'Alpha',
  'Bravo',
  'Charlie',
  { separator: true },
  'Delta',
  'Echo',
  'Foxtrot',
  { heading: 'Animals' },
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

]

const DropdownMenuExample = () => {
  const [selected, setSelected] = React.useState()
  return (
    <div className="flex gap-4 middle">
      <DropdownMenu
        text="Dropdown Menu"
        triggerColor="orange"
        // openOnHover
        button
        options={options}
        onSelect={setSelected}
        debug
      />
      { selected &&
        <div>
          <b>{selected}</b> is selected
        </div>
      }
    </div>
  )
}


export default DropdownMenuExample