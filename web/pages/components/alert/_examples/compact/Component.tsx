import { Alert } from '@/src/index'

const Component = () =>
  <>
    {/* START */}
    <Alert
      compact
      text="Compact alert"
    />
    <Alert
      compact
      type="info"
      title="Hello World!"
      text="This is a compact info alert with a title"
    />
    <Alert
      type="warning"
      size="small"
      icon="exclamation"
      compact border
      text="This is a smaller compact warning alert with an icon"
    />
    {/* END */}
  </>

export default Component
