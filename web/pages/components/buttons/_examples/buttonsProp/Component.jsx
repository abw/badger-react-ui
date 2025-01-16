import React from 'react'
import { Buttons } from '@/src/index'

const ButtonsExample = () =>
  <>
    {/* START */}
    <Buttons
      buttons={[
        {
          text: 'One',
          outline: true,
          iconLeft: 'arrow-left'
        },
        {
          text: 'Two',
          outline: true,
          iconRight: 'arrow-right'
        },
      ]}
    />
    {/* END */}
  </>

export default ButtonsExample
