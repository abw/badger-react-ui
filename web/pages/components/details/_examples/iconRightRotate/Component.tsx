import { Details } from '@/src/index'

const DetailsExample = () =>
  /* START */
  <Details
    summary="Icon Rotation"
    iconLeft={false}
    iconRight="angle-down"
    iconRightRotate={180}
  >
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample