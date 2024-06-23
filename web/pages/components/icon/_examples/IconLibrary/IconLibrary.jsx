import { Icon, IconLibrary, addIcons } from '@/src/index.jsx'
/* START */
import React from 'react'
// PRETEND: import { Icon, IconLibrary, addIcons } from '@abw/badger-react-ui'

// Create a copy of the standard icon library
const myLibrary = structuredClone(IconLibrary)

// add icons...
addIcons(
  {
    diamond: 'M256,32L480,256L256,480L32,256L256,32Z',
    // ...
  },
  // ...to your local library
  // (omit to add to the standard library)
  myLibrary
)

// OR:
// addIcon(
//   'diamond', 'M256,32L480,256L256,480L32,256L256,32Z'
//   myLibrary
// )

const IconExample = () =>
  <Icon
    name="diamond"
    size="x3"
    library={myLibrary}
  />

export default IconExample