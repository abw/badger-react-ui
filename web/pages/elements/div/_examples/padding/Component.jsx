import React from 'react'
import { Div } from '@/src/index'

const Example = () =>
  /* START */
  <div className="grid-1 gap-2">
    <Div border pad>
      Hello
    </Div>
    <Div border pad="2">
      World
    </Div>
    <Div border pad="2 4">
      Badger
    </Div>
    <Div border pad="1 2 3 4">
      Mushroom
    </Div>
  </div>
  /* END */

export default Example