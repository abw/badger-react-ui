import React from 'react'
import { Div } from '@/src/index'

const Example = () =>
  /* START */
  <div className="grid-1 gap-2">
    <Div border pad shadow>
      Hello
    </Div>
    <Div border pad shadow="2">
      World
    </Div>
    <Div border pad shadow="3">
      Badger
    </Div>
    <Div border pad shadow="4">
      Mushroom
    </Div>
  </div>
  /* END */

export default Example