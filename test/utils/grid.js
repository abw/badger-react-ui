import { test, expect } from 'vitest'
import { extractGridProp, extractGridProps, gridPropBestMatch } from '@/src/index.jsx'

test(
  'extractGridProps({ foo: 10 })',
  () => expect(
    extractGridProps({ foo: 10 })
  ).toEqual(
    [ { }, { foo: 10 }]
  )
)

test(
  'extractGridProps({ cols: 2, foo: 10 })',
  () => expect(
    extractGridProps({ cols: 2, foo: 10 })
  ).toEqual(
    [ { cols: 2 }, { foo: 10 }]
  )
)

test(
  'extractGridProps({ cols: 3, mobile: 2, desktop: 5, foo: 10 })',
  () => expect(
    extractGridProps({ cols: 3, mobile: 2, desktop: 5, foo: 10 })
  ).toEqual(
    [ { cols: 3, mobile: 2, desktop: 5 }, { foo: 10 }]
  )
)

test(
  'gridPropBestMatch({ cols: 4, mobile: 2, desktop: 3 }, "anything") -> 4',
  () => expect(
    gridPropBestMatch({ cols: 4, mobile: 2, desktop: 3 }, 'anything')
  ).toEqual(
    'grid-4'
  )
)

test(
  'gridPropBestMatch({ cols: 4, mobile: 2, desktop: 3 }, "ultra") -> 4',
  () => expect(
    gridPropBestMatch({ cols: 4, mobile: 2, desktop: 3 }, 'ultra')
  ).toEqual(
    'grid-4'
  )
)

test(
  'gridPropBestMatch({ cols: 4, mobile: 2, desktop: 3 }, "mobile") -> 2',
  () => expect(
    gridPropBestMatch({ cols: 4, mobile: 2, desktop: 3 }, 'mobile')
  ).toEqual(
    'grid-2'
  )
)

test(
  'gridPropBestMatch({ cols: 4, mobile: 2, desktop: 3 }, "tablet") -> 3',
  () => expect(
    gridPropBestMatch({ cols: 4, mobile: 2, desktop: 3 }, 'tablet')
  ).toEqual(
    'grid-3'
  )
)

test(
  'gridPropBestMatch({ cols: 4, mobile: 2, desktop: 3 }, "desktop") -> 3',
  () => expect(
    gridPropBestMatch({ cols: 4, mobile: 2, desktop: 3 }, 'desktop')
  ).toEqual(
    'grid-3'
  )
)

test(
  'gridPropBestMatch({ cols: 4, laptop: 2, desktop: 3 }, "mobile") -> 2',
  () => expect(
    gridPropBestMatch({ cols: 4, laptop: 2, desktop: 3 }, 'mobile')
  ).toEqual(
    'grid-2'
  )
)

test(
  'gridPropBestMatch({ laptop: 2, desktop: 3 }, "mobile") -> 2',
  () => expect(
    gridPropBestMatch({ laptop: 2, desktop: 3 }, 'mobile')
  ).toEqual(
    'grid-2'
  )
)

test(
  'gridPropBestMatch({ cols: 4, laptop: 2, desktop: 3 }) -> 4',
  () => expect(
    gridPropBestMatch({ cols: 4, laptop: 2, desktop: 3 })
  ).toEqual(
    'grid-4'
  )
)

test(
  'gridPropBestMatch({ laptop: 2, desktop: 3 }) -> 1',
  () => expect(
    gridPropBestMatch({ laptop: 2, desktop: 3 })
  ).toEqual(
    'grid-1'
  )
)

test(
  'extractGridProps({ cols: 4, laptop: 2, desktop: 3, gap: 10 }, "mobile") -> 2',
  () => expect(
    extractGridProp({ cols: 4, laptop: 2, desktop: 3, gap: 10 }, 'mobile')
  ).toEqual(
    ['grid-2', { gap: 10 }]
  )
)