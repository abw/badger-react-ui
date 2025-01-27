import React from 'react'
import { Select } from '@/src/index'

const animals = [
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

const SelectExample = () =>
  <Select
    options={animals}
    value="Bobby Badger"
    search
    debug
  />

export default SelectExample