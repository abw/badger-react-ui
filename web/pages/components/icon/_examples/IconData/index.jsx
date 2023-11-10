import React      from 'react'
import Section    from '@/page/Section.jsx'
import { Icon, IconData } from '@/components/index.jsx'

const IconDataExample = () =>
  <Section
    code="IconData"
  >
    <p>
      The default set of icons is defined as <code>IconData</code>
    </p>
    <div className="grid-fill gap-4 mar-t-8">
      { Object.keys(IconData).map(
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

export default IconDataExample