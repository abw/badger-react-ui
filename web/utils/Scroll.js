export default function scroll(
  element,
  {
    top=0,
    left=0,
    behavior='smooth'
  } = { }
) {
  element?.scrollTo({
    top,
    left,
    behavior
  })
}
