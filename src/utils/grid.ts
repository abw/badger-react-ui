// import { extract } from '@abw/badger-utils'
import { extract } from '@abw/badger-utils'
import { breakpoints } from './breakpoint'

export const selectGridProps = {
  ...breakpoints,
  cols: true,
}

export const extractGridProps = (props) => {
  const otherProps = { ...props }
  // console.log(`selectGridProps: `, selectGridProps)
  const gridProps = extract(
    otherProps,
    selectGridProps,
    { delete: true }
  )
  return [gridProps, otherProps]
}

export const extractGridProp = (props, breakpoint) => {
  const [gridProps, otherProps] = extractGridProps(props)
  //console.log(`props: `, props)
  //console.log(`gridProps: `, gridProps)
  //console.log(`otherProps`, otherProps)
  return [gridPropBestMatch(gridProps, breakpoint), otherProps]
}

export const gridPropBestMatch = (props, breakpoint) => {
  if (! breakpoint) {
    const cols = props.cols || 1
    return `grid-${cols}`
  }
  let bpcols = props.cols || 1
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

