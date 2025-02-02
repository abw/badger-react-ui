import Context          from './Context.js'
import DetailsContainer from './Container'
import NativeContainer  from './Native/Container'
import { Themed }       from '@/src/Theme'
import { DetailsProps } from './types.js'

const defaults = {
  iconLeft: 'angle-right',
  iconLeftRotate: 90,
  iconRightRotate: -90,
}

const Details = ({
  native,
  open=false,
  ...props
}: DetailsProps) =>
  <Context.Provider open={open}>
    { native
      ? <NativeContainer open={open} {...defaults} {...props}/>
      : <DetailsContainer {...defaults} {...props}/>
    }
  </Context.Provider>

export default Themed(Details, 'Details')

