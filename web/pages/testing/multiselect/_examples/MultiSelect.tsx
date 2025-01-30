import { Button, MultiSelect, SelectOption } from '@/src/index'
import { useState } from 'react'

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
]

const MultiSelectExample = () => {
  const values1 = ['Alan Aardvark', 'Bobby Badger']
  const values2 = ['Alan Aardvark', 'Linda Llama']
  const values3 = ['Gina Goat', 'Nobby Nobody']
  const [values, setValues] = useState<undefined|SelectOption[]>([])
  const select1 = () => setValues(values1)
  const select2 = () => setValues(values2)
  const select3 = () => setValues(values3)
  const none    = () => setValues([])
  const nothing = () => setValues(undefined)

  return (
    <div>
      <MultiSelect
        options={animals}
        search
        values={values}
      />
      <div className="flex gap-4 mar-t-4">
        <Button text="Alan and Bobby" onClick={select1}/>
        <Button text="Alan and Linda" onClick={select2}/>
        <Button text="Gina and Nobby" onClick={select3}/>
        <Button text="None (empty array)" onClick={none}/>
        <Button text="Nothing (undefined)" onClick={nothing}/>
      </div>
    </div>
  )
}

export default MultiSelectExample
