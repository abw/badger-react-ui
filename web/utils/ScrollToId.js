export default function ScrollToId(
  id,
  opts={ behavior: 'smooth' }
) {
  console.log(`scroll to #${id}`)
  document.getElementById(id)?.scrollIntoView(opts)
}

