export const lookupVariant = (props, variants, defaultValue={}) => {
  // look for an explicit variant prop or find the name of the first variant
  // that has a define prop
  const variant = props.variant
    || Object.keys(variants).find( key => props[key] )
    || 'default'
  return variants[variant] || variants.default || defaultValue
}

