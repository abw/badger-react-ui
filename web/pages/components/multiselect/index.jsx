import React          from 'react'
import Sections       from '@/web/page/Sections.jsx'
import Heading        from '@/web/page/Heading.jsx'
// import Section        from '@/web/page/Section.jsx'
// import Split          from '@/web/site/Split.jsx'
import MultiSelect    from './_examples/MultiSelect/index.jsx'
import Options        from './_examples/options/index.jsx'
import Values         from './_examples/values/index.jsx'
import DisplayOption  from './_examples/displayOption/index.jsx'
import DisplaySelection from './_examples/displaySelection/index.jsx'
import SelectedIcon   from './_examples/selectedIcon/index.jsx'
import UnselectedIcon from './_examples/unselectedIcon/index.jsx'
import { SelectLink } from '@/web/site/Links.jsx'

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
      <SelectedIcon/>
      <UnselectedIcon/>
      <DisplayOption/>
      <DisplaySelection/>
    </Sections>
  </div>

export default MultiSelectExamples