export function parseAttrs(string) {
  return string
    .split(/\s*[;&]\s*/)
    .filter( v => v.length > 0 )
    .reduce(
      (attrs, attr) => {
        const [name, value] = attr.split(/\s*[:=]\s*/)
        attrs[name] = value
        return attrs
      },
      { }
    )
}
