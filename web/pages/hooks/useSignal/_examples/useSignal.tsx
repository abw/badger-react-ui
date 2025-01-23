import { SignalSubscribe, useSignal, Checkbox, DebugFunction } from '@/src/index'
import { useEffect, useState } from 'react'
/* START */
// PRETEND: import {
// PRETEND:   useSignal, SignalSubscribe, Checkbox, DebugFunction
// PRETEND: } from '@abw/badger-react-ui

const UseSignalExample = () => {
  const [foo, setFoo] = useState(true)
  const [bar, setBar] = useState(false)
  const {
    debug,
    subscribe,
    subscribers,
    trigger
  } = useSignal<number>({
    debug: true,
    debugColor: 'green'
  })

  return (
    <div className="grid-1 gap-4">
      <Checkbox
        text="Show foo"
        checked={foo}
        onChange={setFoo}
        border
      />
      { foo &&
        <Subscriber
          name="foo"
          subscribe={subscribe}
          debug={debug}
        />
      }
      <Checkbox
        text="Show bar"
        checked={bar}
        onChange={setBar}
        border
      />
      { bar &&
        <Subscriber
          name="bar"
          subscribe={subscribe}
          debug={debug}
        />
      }
      <div className="larger">
        {subscribers.length} subscribers
      </div>
      <div className="pad-2 green bgc-90 bgd-10 border bdr-2">
        <p className="mar-b-2">Click on a button to send a signal</p>
        <div className="flex gap-4">
          <button onClick={() => trigger(1)}>1</button>
          <button onClick={() => trigger(10)}>10</button>
          <button onClick={() => trigger(11)}>11</button>
          <button onClick={() => trigger(99)}>99</button>
        </div>
      </div>
    </div>
  )
}

const Subscriber = ({
  name,
  subscribe,
  debug
}: {
  name: string,
  subscribe: SignalSubscribe<number>,
  debug: DebugFunction
}) => {
  const [n, setN] = useState<number>(0)
  useEffect(
    () => {
      debug(`subscribing ${name}`)
      return subscribe(
        (n: number) => {
          debug(`${name} got ${n}`)
          setN(n)
        }
      )
    },
    [ ]
  )
  return (
    <div className="compact info alert border">
      {name} is {n}
    </div>
  )
}


export default UseSignalExample