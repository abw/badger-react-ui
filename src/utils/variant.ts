import { PropsObject } from '../types'

// NOTE: This isn't used internally any more

export interface PropsWithVariant extends PropsObject {
  variant?: string
}

export const lookupVariant = (
  props: PropsWithVariant,
  variants: PropsObject,
  defaultValue={}
) => {
  // look for an explicit variant prop or find the name of the first variant
  // that has a define prop
  const variant = props.variant
    || Object.keys(variants).find( key => props[key] )
    || 'default'
  return variants[variant] || variants.default || defaultValue
}

