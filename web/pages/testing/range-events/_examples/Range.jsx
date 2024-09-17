import React from 'react'
import { Range, Button } from '@/src/index.jsx'

const RangeExample = () => {
  const [color, setColor] = React.useState('red')
  const [on, setOn] = React.useState(true)
  const onChange = (_, max) => {
    if (max < 10) {
      setOn(false)
    }
    else if (max < 50) {
      setColor('green')
    }
    else if (max < 80) {
      setColor('yellow')
    }
    else {
      setColor('red')
    }
  }
  const turnOn = () => {
    setColor('red')
    setOn(true)
  }

  return (
    <div className="grid-1 gap-2 border pad-2 bdr-2">
      { on
        ? <Range
            debug
            color={color}
            onChange={onChange}
          />
        : <Button
            text="Turn it on, turn it on again"
            color="green"
            onClick={turnOn}
          />
      }
    </div>
  )
}

export default RangeExample