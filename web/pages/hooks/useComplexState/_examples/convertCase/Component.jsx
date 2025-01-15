import React from 'react'
import { useComplexState, Button } from '@/src/index'
import { snakeToStudly } from '@abw/badger-utils'

// PRETEND: import { useComplexState, Button } from '@abw/badger-react-ui
// PRETEND: import { snakeToStudly } from '@abw/badger-react-ui

const UseComplexStateExample = () => {
/* START */
  const [
    { amplifier_volume },
    { setAmplifierVolume }
  ] = useComplexState(
    { amplifier_volume: 10 },
    { convertCase: snakeToStudly }
  )
  const oneLouder = () => setAmplifierVolume(
    volume => volume + 1
  )

  return (
    <>
      <p>
        Volume is {amplifier_volume}
      </p>
      <Button
        text="One Louder"
        onClick={oneLouder}
      />
    </>
  )
/* END */
}

export default UseComplexStateExample