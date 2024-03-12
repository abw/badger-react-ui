import React            from 'react'
import Heading          from '@/web/page/Heading.jsx'
import Sections         from '@/web/page/Sections.jsx'
import Section          from '@/web/page/Section.jsx'
import Split            from '@/web/site/Split.jsx'
import Dropdown         from './_examples/Dropdown/index.jsx'
import Text             from './_examples/text/index.jsx'
import Content          from './_examples/content/index.jsx'
import OnHover          from './_examples/openOnHover/index.jsx'
import Right            from './_examples/right/index.jsx'
import Wide             from './_examples/wide/index.jsx'
import IconLeft         from './_examples/iconLeft/index.jsx'
import IconLeftRotate   from './_examples/iconLeftRotate/index.jsx'
import IconRight        from './_examples/iconRight/index.jsx'
import IconRightRotate  from './_examples/iconRightRotate/index.jsx'
// import Context    from './_examples/Context/index.jsx'
// import ClassName  from './_examples/className/index.jsx'
// import Color      from './_examples/color/index.jsx'
// import Size       from './_examples/size/index.jsx'
// import Icons      from './_examples/icons/index.jsx'
// import FirstLast  from './_examples/showFirstLast/index.jsx'

const DropdownExamples = () =>
  <div className="flow">
    <h1>Dropdown</h1>
    <Dropdown/>
    {/* <Context/> */}
    <Sections tocName="dropdown">
      <Heading title="Properties"/>
      <Text/>
      <Content/>
      <OnHover/>
      <Right/>
      <Wide/>
      <IconLeft/>
      <IconLeftRotate/>
      <IconRight/>
      <IconRightRotate/>
      {/*
      <ClassName/>
      <Color/>
      <Size/>
      <Icons/>
      <FirstLast/>
      */}
      <Split>
        <div className="flow">
          <Heading title="CSS Classes"/>
          <Section code="className">
            Used to set the CSS class for the dropdown container.  The default
            value is <code>dropdown</code>.
          </Section>
          <Section code="openClass">
            Used to set the CSS class added to the dropdown container when
            the menu is open.  The default value is <code>open</code>.
          </Section>
          <Section code="closedClass">
            Used to set the CSS class added to the dropdown container when
            the menu is closed.  The default value is <code>closed</code>.
          </Section>
          <Section code="triggerClass">
            Used to set the CSS class added to the dropdown trigger.
            The default value is <code>trigger</code>.
          </Section>
          <Section code="menuClass">
            <b>TODO: update this!</b>
            Used to set the CSS class added to the dropdown menu container.
            The default value is <code>menu border bdr-1</code>.  The{' '}
            <code>border</code> utility class adds a border and{' '}
            <code>bdr-1</code> sets the border radius to 1 unit (0.25rem or
            4px).
          </Section>
        </div>
        <div className="flow">
          <Heading title="Components"/>
          <Section code="Trigger" id="Trigger-component">
            Renders the dropdown menu trigger.  Defaults
            to <code>DropdownTrigger</code>.
          </Section>
          <Section code="Body" id="Body-component">
            Renders the dropdown body.  Defaults
            to <code>DropdownBody</code>.
          </Section>
        </div>
      </Split>
    </Sections>
  </div>

export default DropdownExamples