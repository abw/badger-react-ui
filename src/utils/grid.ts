// import { extract } from '@abw/badger-utils'
import { extract } from '@abw/badger-utils'
import { breakpoints } from './breakpoint'
import { PropsObject } from '../types'

export const selectGridProps = {
  ...breakpoints,
  cols: true,
}

export const extractGridProps = (props: PropsObject) => {
  const otherProps: PropsObject = { ...props }
  // console.log(`selectGridProps: `, selectGridProps)
  const gridProps: PropsObject = extract(
    otherProps,
    selectGridProps,
    { delete: true }
  ) as PropsObject
  return [gridProps, otherProps]
}

export const extractGridProp = (props: PropsObject, breakpoint?: string) => {
  const [gridProps, otherProps] = extractGridProps(props)
  //console.log(`props: `, props)
  //console.log(`gridProps: `, gridProps)
  //console.log(`otherProps`, otherProps)
  return [gridPropBestMatch(gridProps, breakpoint), otherProps]
}

export const gridPropBestMatch = (props: PropsObject, breakpoint?: string) => {
  if (! breakpoint) {
    const cols = props.cols || 1
    return `grid-${cols}`
  }
  let bpcols: unknown = props.cols || 1
  const bpnames = Object.keys(breakpoints)
  const bpindex = bpnames.indexOf(breakpoint)
  if (bpindex >= 0) {
    const bpsearch = bpnames.slice(bpindex)
    // console.log(`breakpoint is ${breakpoint}, searching for first specified of`, bpsearch)
    const bpname = bpsearch.find(
      bpname => props[bpname]
    )
    if (bpname) {
      bpcols = props[bpname]
    }
  }
  return `grid-${bpcols}`
}

