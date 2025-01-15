import React from 'react'
import { Div } from '@/src/index'

const Example = () =>
  <div className="grid-1 gap-8">
    {/* START */}
    <Div flex gap>
      <Div border pad> Hello </Div>
      <Div border pad> World </Div>
    </Div>
    <Div grid="2" gap>
      <Div border pad> Hello </Div>
      <Div border pad> World </Div>
    </Div>
    <Div grid="2" gap="4 2">
      <Div border pad> Hello </Div>
      <Div border pad> World </Div>
      <Div border pad> Badger </Div>
      <Div border pad> Mushroom </Div>
    </Div>
    {/* END */}
  </div>

export default Example