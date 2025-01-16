import { Button } from '@/components/Button'
import { ConfirmButtonsType } from './types'

const Buttons: ConfirmButtonsType = ({
  buttonClass,
  cancel,
  confirm
}) =>
  <div className="flex space gap-4">
    <Button className={buttonClass} {...cancel}/>
    <Button className={buttonClass} {...confirm}/>
  </div>

export default Buttons