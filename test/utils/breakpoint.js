import { test, expect } from 'vitest'
import { widthBreakpoint } from '@/src/utils/breakpoint.js'

test(
  'widthBreakpoint(1500) -> ultra',
  () => expect( widthBreakpoint(1500) ).toBe( 'ultra' )
)
test(
  'widthBreakpoint(1441) -> ultra',
  () => expect( widthBreakpoint(1441) ).toBe( 'ultra' )
)
test(
  'widthBreakpoint(1441) -> widescreen',
  () => expect( widthBreakpoint(1440) ).toBe( 'widescreen' )
)
test(
  'widthBreakpoint(1201) -> widescreen',
  () => expect( widthBreakpoint(1201) ).toBe( 'widescreen' )
)
test(
  'widthBreakpoint(1200) -> desktop',
  () => expect( widthBreakpoint(1200) ).toBe( 'desktop' )
)
test(
  'widthBreakpoint(961) -> desktop',
  () => expect( widthBreakpoint(961) ).toBe( 'desktop' )
)
test(
  'widthBreakpoint(960) -> laptop',
  () => expect( widthBreakpoint(960) ).toBe( 'laptop' )
)
test(
  'widthBreakpoint(721) -> laptop',
  () => expect( widthBreakpoint(721) ).toBe( 'laptop' )
)
test(
  'widthBreakpoint(720) -> tablet',
  () => expect( widthBreakpoint(720) ).toBe( 'tablet' )
)
test(
  'widthBreakpoint(481) -> tablet',
  () => expect( widthBreakpoint(481) ).toBe( 'tablet' )
)
test(
  'widthBreakpoint(480) -> mobile',
  () => expect( widthBreakpoint(480) ).toBe( 'mobile' )
)
test(
  'widthBreakpoint(360) -> mobile',
  () => expect( widthBreakpoint(360) ).toBe( 'mobile' )
)
test(
  'widthBreakpoint(1) -> mobile',
  () => expect( widthBreakpoint(1) ).toBe( 'mobile' )
)
test(
  'widthBreakpoint(0) -> unknown',
  () => expect( widthBreakpoint(0) ).toBe( 'unknown' )
)
test(
  'widthBreakpoint(null) -> unknown',
  () => expect( widthBreakpoint(null) ).toBe( 'unknown' )
)