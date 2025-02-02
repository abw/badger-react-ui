import { Details } from '@/src/index'

const DetailsExample = () =>
  <div className="grid-1 gap-8">
    {/* START */}
    <Details
      border lined
      summary="Wide Summary"
      iconRight="cog"
      iconRightRotate={360}
      wideSummary
    >
      This is the content that is revealed.
    </Details>

    <Details
      border lined
      wideSummary
      summary={
        <div className="flex space middle">
          Todo List
          <span className="small fgc-50">
            11 items
          </span>
        </div>
      }
    >
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>


export default DetailsExample