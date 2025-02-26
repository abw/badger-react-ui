import { Button, MultiSelect, Table, Themed } from '@/src/index'
import { Model } from '@abw/react-model'
import { useState } from 'react'
import Foo from './Foo'
import Bar from './Bar'
import { Themer } from 'tmp/Themer'

type MyComponentProps = {
  volume: number
}
const MyComponent = ({
  volume = 10
}: MyComponentProps) =>
  <div>Volume is {volume}</div>

type ModelProps = {
  initialVolume?: number
}

interface MyOtherComponentProps {
  volume: number
}
const MyOtherComponent = ({
  volume = 10
}: MyOtherComponentProps) =>
  <div>Volume is {volume}</div>

export const ThemedMC = Themed(MyComponent)
export const ThemerMC = Themer(MyComponent)
export const ThemedMOC = Themed(MyOtherComponent)
export const ThemerMOC = Themer(MyOtherComponent)


const MyModel = Model(
  ({ initialVolume = 10 }: ModelProps) => {
    const [volume, setVolume] = useState(initialVolume)
    const louder = (inc: number = 1) => setVolume(
      volume => volume + inc
    )
    const quieter = (dec: number = 1) => setVolume(
      volume => volume - dec
    )
    return {
      volume,
      setVolume,
      louder,
      quieter
    }
  }
)

const PropsExample = () =>
  <div>

    {/* @ts-expect-error more is not a property */}
    <MultiSelect more="parp"/>
    {/* @ts-expect-error more is not a property */}
    <MyComponent volume={11} more="fail"/>
    {/* @ts-expect-error more is not a property */}
    <MyModel.Provider initialVolume={11} more="fail">
    </MyModel.Provider>
    <p>
      I don't understand why Table accepts an invalid "more" property when
      Foo (which also used Themed) and Bar (which used custom hacked Themer)
      don't accept the "name" property.  What is it about Table that makes
      Themed fail when it seems to work OK with MultiSelect, MyComponent,
      Foo and Bar?
    </p>
    <p>
      Aaah... it's something about the fact that TableProps is an intersection
      with HTMLTableAttrs (aka React.ComponentProps&lt;'table'&gt;)
    </p>
    <p>
      If I mix those properties in but DON'T use the themer then it work.
      If I leave them out and use the themer then it also works.
      But it doesn't work with both.
    </p>
    <p>
      Aha, one more clue!  If I make any of the Table props mandatory then
      Themed no longer accepts it.  But it still works with Themer.  See
      Foo.tsx.  If I change Themer from `Props extends object` to
      `Props extends AnyProps` (Record&lt;string, unknown&gt;) then it wonks.
    </p>
    <p>
      (NEXT DAY...) I think I've got it.  I need to use
      React.ComponentPropsWithoutRef&lt;'button'&gt; instead of
      React.ComponentProps.
    </p>
    {/* @ts-expect-error more is not a property */}
    <Table more="parp" name="nope"/>
    {/* @ts-expect-error name is not a property */}
    <Foo volume={20} numpty="dumpty" name="wibble"/>
    {/* @ts-expect-error name is not a property */}
    <Bar volume={20} name="wibble"/>
    {/* @ts-expect-error more is not a property */}
    <Button text="OK" icon="not" more="floop"/>
    {/* @ts-expect-error yarp is not a property */}
    <ThemedMC volume={10} yarp/>
    <ThemerMC volume={10}/>
  </div>

export default PropsExample
