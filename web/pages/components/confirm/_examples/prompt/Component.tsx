import { Confirm, Warning } from '@/src/index'

const ConfirmExample = () =>
  <div className="flex gap-4">
    {/* START */}
    <Confirm
      text="Delete 1"
      color="brown"
      modal
      prompt="Are you sure you want to delete this?"
    />

    <Confirm
      text="Delete 2"
      color="yellow"
      modal
      prompt={
        <Warning
          title="Warning!"
          text="This is forever. You can't undo this."
          icon="exclamation"
          border
        />
      }
    />
    {/* END */}
  </div>

export default ConfirmExample