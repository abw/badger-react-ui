import { Themed } from '@/src/index'
import { Themer } from '@/src/Themer'
import React from 'react'

type FooProps =
  // React.ComponentProps<'div'> & {          // FAIL
  React.ComponentPropsWithoutRef<'div'> & {   // IMPORTANT!  ...WithoutRef
  volume?: number
  numpty?: string
  // yarp?: string
}

const Foo = ({
  volume = 10,
  numpty,
  ...props
}: FooProps) => {
  return (
    <div {...props}>Volume is {volume}, numpty is {numpty || 'undefined'}</div>
  )
}

// TS error here on Foo
// Property 'volume' is missing in type 'Record<string, unknown>' but
// required in type '{ volume: number; numpty?: string | undefined; }'
export const ThemedFoo = Themed(Foo)

// But this works OK
export const ThemerFoo = Themer(Foo)

export default ThemedFoo
