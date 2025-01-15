import { useToggle, Button } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { useToggle, Button } from '@abw/badger-react-ui

const UseToggleExample = () => {
  const [option, Toggle, selectOption, toggleOption] = useToggle({
    options: [
      { value: 'love', text: 'Love', iconLeft: 'thumb-up'   },
      { value: 'hate', text: 'Hate', iconLeft: 'thumb-down' },
    ],
    storageKey: 'brui-toggle-love-hate'
  })
  return (
    <div className="grid-1 gap-4">
      <Toggle/>
      <Toggle size="small" color="violet"/>
      <Toggle size="smaller" color="blue"/>
      You {option.value} this!
      <div className="flex gap-2 small">
        <Button
          text="Select 0"
          onClick={() => selectOption(0)}
        />
        <Button
          text="Select 1"
          onClick={() => selectOption(1)}
        />
        <Button
          text="Select love"
          onClick={() => selectOption('love')}
        />
        <Button
          text="Select hate"
          onClick={() => selectOption('hate')}
        />
      </div>
      <Button
        text="Toggle"
        onClick={toggleOption}
      />
    </div>
  )
}

export default UseToggleExample