import { Details } from '@/src/index'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details
      summary="This is the summary"
      content="This is the content that is revealed."
    />
    <Details
      summary={<b>This is the summary</b>}
      content={<i>This is the content that is revealed.</i>}
    />
    {/* END */}
  </div>

export default DetailsExample