import React    from 'react'
import Context from '@/components/Dropdown/Context'
import Button from '@/components/Button/Button'

const Close = ({
  close,
}) =>
  <Button
    className="wide"
    size="smaller"
    color="green"
    text="OK"
    onClick={close}
  />

export const ColumnsClose = Context.Consumer(Close)
export default ColumnsClose