import Context from '@/components/Dropdown/Context'
import Button from '@/components/Button/Button'

export const ColumnsClose = Context.Consumer(
  ({
    close,
  }) =>
    <Button
      className="wide"
      size="smaller"
      color="green"
      text="OK"
      onClick={close}
    />
)

export default ColumnsClose