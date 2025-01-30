import React from 'react'
import { Button, Select } from '@/src/index'

const animals = [
  { id: 'alan',  name: 'Alan Aardvark' },
  { id: 'brian', name: 'Brian Badger'  },
  { id: 'colin', name: 'Colin Camel'  },
  { id: 'david', name: 'David Donkey'  },
]

const DynamicSelectValue = () => {
  const [value, setValue] = React.useState('alan')
  const [selected, setSelected] = React.useState(null)
  return (
    <div className="border bdr-2 surface-0 pad-2">
      <div className="field">
        <Select
          search
          options={animals}
          onSelect={setSelected}
          value={value}
          // debug
        />
      </div>
      <p>
        Value is <b>{value}</b>
      </p>
      <p>
        { selected
          ? <>You have selected <b>#{selected.id}: {selected.name}</b></>
          : 'Select an option'
        }
      </p>
      <div className="flex gap-2">
        <Button
          text="Alan"
          onClick={() => setValue('alan')}
        />
        <Button
          text="Brian"
          onClick={() => setValue('brian')}
        />
      </div>
    </div>
  )
}

export default DynamicSelectValue