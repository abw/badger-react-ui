import { TabsetBodyType } from './types'

const Body: TabsetBodyType = ({
  tab
}) => {
  if (! tab) {
    return null
  }
  const { content, Component } = tab
  if (content) {
    return content
  }
  if (Component) {
    return <Component tab={tab}/>
  }
  return 'No content, element or Component defined for tab'
}

export default Body