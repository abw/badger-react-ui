import React from 'react'
import { Button, Select } from '@/src/index.jsx'
import { hasValue } from '@abw/badger-utils'

const animals = [
  { id: 'alan',  name: 'Alan Aardvark' },
  { id: 'brian', name: 'Brian Badger'  },
  { id: 'colin', name: 'Colin Camel'  },
  { id: 'david', name: 'David Donkey'  },
]

const tap = [
  { id: 'nigel', name: 'Nigel Tufnel' },
  { id: 'david', name: 'David St. Hubbins' },
  { id: 'derek', name: 'Derek Smalls' },
  { id: 'viv',   name: 'Viv Savage' },
  { id: 'mick',  name: 'Mick Shrimpton' },
]

const DynamicSelect = () => {
  const [options, setOptions] = React.useState(animals)
  const [using, setUsing] = React.useState('Animals')
  const [value, setValue] = React.useState(null)
  const onSelect = option => setValue(option.name)
  const changeOptions = (using, options) => {
    setUsing(using)
    setOptions(options)
  }
  return (
    <>
      <Select
        search
        options={options}
        onSelect={onSelect}
      />
      <p>
        Options: {using}
      </p>
      <p>
        {value
          ? `You have selected: ${value}`
          : 'Select an option'
        }
      </p>
      <div className="flex gap-2">
        <Button
          text="Animals"
          onClick={() => changeOptions('Animals', animals)}
        />
        <Button
          text="Spinal Tap"
          onClick={() => changeOptions('Spinal Tap', tap)}
        />
      </div>
    </>
  )
}

export default DynamicSelect