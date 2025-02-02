import { Button } from '@/components/Button'
import { ConfirmButtonsProps } from './types'

const ConfirmButtons = ({
  buttonClass,
  cancel,
  confirm
}: ConfirmButtonsProps) =>
  <div className="flex space gap-4">
    <Button className={buttonClass} {...cancel}/>
    <Button className={buttonClass} {...confirm}/>
  </div>

export default ConfirmButtons