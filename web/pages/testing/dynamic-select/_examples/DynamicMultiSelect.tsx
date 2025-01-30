import React from 'react'
import { Button, MultiSelect, SelectOption } from '@/src/index'

const nato = [
  { id: 'a', name: 'Alpha'   },
  { id: 'b', name: 'Bravo'   },
  { id: 'c', name: 'Charlie' },
  { id: 'd', name: 'Delta'   },
  { id: 'e', name: 'Echo'    },
  { id: 'f', name: 'Foxtrot' },
  { id: 'g', name: 'Golf'    },
  { id: 'h', name: 'Hotel'   },
  { id: 'i', name: 'India'   },
  { id: 'j', name: 'Juliet'  },
]

const animals = [
  { id: 'a', name: 'Ant'      },
  { id: 'b', name: 'Badger'   },
  { id: 'c', name: 'Cat'      },
  { id: 'd', name: 'Dog'      },
  { id: 'e', name: 'Elephant' },
]

const DynamicMultiSelect = () => {
  const [options, setOptions] = React.useState<SelectOption[]>(nato)
  const [using, setUsing] = React.useState('NATO')
  const onChange = (values: SelectOption[]) => console.log(`changed: `, values)
  const onUpdate = (values: SelectOption[]) => console.log(`updated: `, values)

  const changeOptions = (using: string, options: SelectOption[]) => {
    setUsing(using)
    setOptions(options)
  }
  return (
    <div className="border bdr-2 surface-0 pad-2">
      <div className="field">
        <label>{using}</label>
        <MultiSelect
          search
          options={options}
          onChange={onChange}
          onUpdate={onUpdate}
          // debug
        />
      </div>
      <div className="flex gap-2">
        <Button
          text="NATO Phonetics"
          onClick={() => changeOptions('NATO', nato)}
        />
        <Button
          text="Animals"
          onClick={() => changeOptions('Animals', animals)}
        />
      </div>
    </div>
  )
}

export default DynamicMultiSelect