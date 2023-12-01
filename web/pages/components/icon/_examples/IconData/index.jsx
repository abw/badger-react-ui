import React      from 'react'
import Section    from '@/page/Section.jsx'
import { Icon, Library } from '@/components/index.jsx'

const LibraryExample = () =>
  <Section
    code="Library"
  >
    <p>
      The default set of icons is defined as <code>Library</code>
    </p>
    <div className="grid-fill gap-4 mar-t-8">
      { Object.keys(Library.icons).map(
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