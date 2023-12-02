import { Generator } from '@abw/react-context'
import SiteContext from '@/site/Context.jsx'

const Context = ({addToc, addTocHeading, tocName, render}) => {
  const addPageToc = (key, value, ref) => {
    addToc(tocName, key, value, ref)
  }
  const addPageTocHeading = (key, value, ref) => {
    addTocHeading(tocName, key, value, ref)
  }
  return render({
    addPageToc,
    addPageTocHeading,
  })
}

export default Generator(
  SiteContext.Consumer(Context)
)