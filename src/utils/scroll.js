export const scrollParentChild = (parent, child) => {
  if (! parent || ! child) {
    return
  }
  const cTop = child.offsetTop
  const cBot = cTop + child.offsetHeight
  const pTop = parent.scrollTop
  const pBot = pTop + parent.offsetHeight
  if (cTop < pTop) {
    parent.scrollTo({
      top: cTop,
    })
  }
  else if (cBot > pBot) {
    parent.scrollTo({
      top: pTop + (cBot - pBot),
    })
  }
}
