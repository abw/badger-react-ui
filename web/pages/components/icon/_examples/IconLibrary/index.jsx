import React      from 'react'
import Section    from '@/page/Section.jsx'
import { Icon, IconLibrary } from '@/components/index.jsx'

const LibraryExample = () =>
  <Section
    code="IconLibrary"
  >
    <p>
      The default set of icons is defined as <code>IconLibrary</code>.
      The <code>addIcon()</code> and <code>addIcons()</code> function are
      provided for adding icons to the library.
    </p>
    <div className="grid-fill gap-4 mar-t-8">
      { Object.keys(IconLibrary.icons).map(
        name =>
          <div
            key={name}
            className="text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2"
          >
            <Icon name={name} className="x3"/>
            <div className="small mar-t-4">{name}</div>
          </div>
      )}
    </div>
  </Section>

export default LibraryExample