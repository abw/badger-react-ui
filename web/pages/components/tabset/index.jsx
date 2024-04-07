import React      from 'react'
import Heading    from '@/web/page/Heading.jsx'
import Sections   from '@/web/page/Sections.jsx'
import Tabset     from './_examples/Tabset/index.jsx'
import Tabs       from './_examples/Tabs/index.jsx'
import StorageKey from './_examples/StorageKey/index.jsx'
import Lined      from './_examples/Lined/index.jsx'
import Solid      from './_examples/Solid/index.jsx'
import Color      from './_examples/Color/index.jsx'
import Size       from './_examples/Size/index.jsx'
import Center     from './_examples/Center/index.jsx'
import Right      from './_examples/Right/index.jsx'
import Section    from '@/web/page/Section.jsx'
//import Split      from '@/web/site/Split.jsx'

const TabsetExamples = () =>
  <div className="flow">
    <h1>Tabset</h1>
    <Tabset/>
    <Sections tocName="tabset">
      <Heading title="Properties"/>
      <Tabs/>
      <StorageKey/>
      <Lined/>
      <Solid/>
      <Color/>
      <Size/>
      <Center/>
      <Right/>
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
    </Sections>
  </div>

export default TabsetExamples