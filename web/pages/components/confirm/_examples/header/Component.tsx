import { Confirm } from '@/src/index'

const ConfirmExample = () =>
  /* START */
  <Confirm
    text="Delete 3"
    color="orange"
    modal
    header={
      <>
        <h3>You are about to delete something!</h3>
        <div className="small">Think very carefully...</div>
      </>
    }
  />
  /* END */

export default ConfirmExample