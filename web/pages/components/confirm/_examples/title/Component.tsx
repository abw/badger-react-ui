import { Confirm } from '@/src/index'

const ConfirmExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    title="You are about to delete something!"
    modal
  />
  /* END */

export default ConfirmExample