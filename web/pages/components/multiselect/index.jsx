import React            from 'react'
import Sections         from '@/web/page/Sections.jsx'
import Heading          from '@/web/page/Heading.jsx'
import MultiSelect      from './_examples/MultiSelect/index.jsx'
import Options          from './_examples/options/index.jsx'
import Values           from './_examples/values/index.jsx'
import DisplayOption    from './_examples/displayOption/index.jsx'
import DisplaySelection from './_examples/displaySelection/index.jsx'
import SelectedIcon     from './_examples/selectedIcon/index.jsx'
import UnselectedIcon   from './_examples/unselectedIcon/index.jsx'
import Sortable         from './_examples/sortable/index.jsx'
import OnChange         from './_examples/onChange/index.jsx'
import { CodeHashLink, SelectLink }   from '@/web/site/Links.jsx'
import Section from '@/web/page/Section.jsx'

const MultiSelectExamples = () =>
  <div className="flow">
    <h1>MultiSelect</h1>
    <MultiSelect/>
    <Sections tocName="multiselect">
      <Heading title="Properties"/>
      <p>
        The following properties can be specified in addition to those
        supported by the <SelectLink/> component.
      </p>
      <Options/>
      <Values/>
      <Sortable/>
      <SelectedIcon/>
      <UnselectedIcon/>
      <DisplayOption/>
      <DisplaySelection/>
      <Heading title="Event Handlers"/>
      <OnChange/>
      <Section code="onUpdate">
        If this is defined it will be called instead of any{' '}
        <CodeHashLink id="onChange"/> handler when the selection changes
        due to the <CodeHashLink id="options"/> or <CodeHashLink id="value"/> properties
        changing.
      </Section>
    </Sections>
  </div>

export default MultiSelectExamples