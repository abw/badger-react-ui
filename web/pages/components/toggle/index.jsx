import React      from 'react'
import Heading    from '@/web/page/Heading.jsx'
import Sections   from '@/web/page/Sections.jsx'
// import Section    from '@/web/page/Section.jsx'
import Toggle     from './_examples/Toggle/index.jsx'
import Options    from './_examples/options/index.jsx'
import Selected   from './_examples/selected/index.jsx'
import OnSelect   from './_examples/onSelect/index.jsx'
import FindSelected from './_examples/findSelectedIndex/index.jsx'
import Color        from './_examples/color/index.jsx'
import Size         from './_examples/size/index.jsx'
import ActiveProps  from './_examples/activeProps/index.jsx'
import InactiveProps from './_examples/inactiveProps/index.jsx'
import ToggleState   from './_examples/ToggleState/index.jsx'
import UseToggle     from './_examples/useToggle/index.jsx'
//import Split      from '@/web/site/Split.jsx'

const ToggleExamples = () =>
  <div className="flow">
    <h1>Toggle</h1>
    <Toggle/>
    <Sections tocName="toggle">
      <Heading title="Properties"/>
      <Options/>
      <Selected/>
      <FindSelected/>
      <Size/>
      <Color/>
      <ActiveProps/>
      <InactiveProps/>
      <Heading title="Event Handlers"/>
      <OnSelect/>
      <Heading title="Components"/>
      <ToggleState/>
      <UseToggle/>
      {/*
      <Section code="tabsetClass">
        The CSS class added to the tabset container.  This defaults
        to <code>tabset</code>.
      </Section>
      <Section code="tabsClass">
        The CSS class added to the tabs list.  This defaults
        to <code>tabs</code>.
      </Section>
      <Section code="activeClass">
        The CSS class added to the active tab.  This defaults
        to <code>active</code>.
      </Section>
      <Section code="disabledClass">
        The CSS class added to a disabled active tab.  This defaults
        to <code>disabled</code>.
      </Section>
      <Section code="className">
        An additional CSS class to be added to the tabset container.  Use
        this for applying additional margin utility classes, for example.
      </Section>
      <Section code="bodyClass">
        A CSS class to be added to the body container.
      </Section>
      <Section code="Body">
        A component to render the body for each tab.  It will be passed
        the active <code>tab</code> as a property.
      </Section>
      */}
    </Sections>
  </div>

export default ToggleExamples