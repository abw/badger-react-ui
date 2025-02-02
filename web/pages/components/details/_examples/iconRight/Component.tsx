import { Details } from '@/src/index'

const DetailsExample = () =>
  /* START */
  <Details
    summary="Custom Icon on Right"
    iconLeft={false}
    iconRight="angle-left"
  >
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample