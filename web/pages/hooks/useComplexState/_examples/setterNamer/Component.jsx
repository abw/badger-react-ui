import React from 'react'
import { useComplexState, Button } from '@/src/index'

// PRETEND: import { useComplexState, Button } from '@abw/badger-react-ui
// PRETEND: import { snakeToStudly } from '@abw/badger-react-ui

const UseComplexStateExample = () => {
/* START */
  const [
    { volume },
    { change_volume }
  ] = useComplexState(
    { volume: 10 },
    { setterNamer: key => `change_${key}` }
  )
  const oneLouder = () => change_volume(
    volume => volume + 1
  )

  return (
    <>
      <p>
        Volume is {volume}
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