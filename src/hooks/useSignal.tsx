import { useState } from 'react'
import { debugFunction, DebugOptions } from '../utils'

export type UseSignalProps = DebugOptions & {
  // name?: string
}

export type SignalSubscriber<T> = (arg: T) => void
export type SignalSubscribers<T> = SignalSubscriber<T>[]
export type SignalSubscribe<T> = (subscriber: SignalSubscriber<T>) => SignalUnsubscriber
export type SignalUnsubscribe<T> = (subscriber: SignalSubscriber<T>) => void
export type SignalUnsubscriber = () => void

export const useSignal = <T,>({
  debugPrefix = 'Signal > ',
  ...props
}: UseSignalProps) => {
  const debug = debugFunction({ debugPrefix, ...props })
  debug('useSignal()')

  const [subscribers, setSubscribers] = useState<SignalSubscribers<T>>([ ])

  const subscribe = (subscriber: SignalSubscriber<T>) => {
    debug('subscribe')
    setSubscribers(
      subscribers => [...subscribers, subscriber]
    )
    // return a function to unsubscribe
    return () => unsubscribe(subscriber)
  }

  const unsubscribe = (subscriber: SignalSubscriber<T>) => {
    debug('unsubscribe')
    setSubscribers(
      subscribers => subscribers.filter( s => s !== subscriber )
    )
  }

  const trigger = (arg: T) => {
    debug('trigger:', arg)
    subscribers.forEach(
      subscriber => subscriber(arg)
    )
  }

  return {
    debug,
    subscribe,
    unsubscribe,
    subscribers,
    trigger
  }
}