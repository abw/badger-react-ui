import React      from 'react'
import Heading    from '@/web/page/Heading.jsx'
import Sections   from '@/web/page/Sections.jsx'
import Section    from '@/web/page/Section.jsx'
import Split            from '@/web/site/Split.jsx'
import Dropdown         from './_examples/Dropdown/index.jsx'
import OnHover          from './_examples/OpenOnHover/index.jsx'
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
    <h1>Dropdown Menu</h1>
    <Dropdown/>
    {/* <Context/> */}
    <Sections tocName="dropdown">
      <Heading title="Properties"/>
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
            Used to set the CSS class added to the dropdown menu container.
            The default value is <code>menu border bdr-1</code>.  The{' '}
            <code>border</code> utility class adds a border and{' '}
            <code>bdr-1</code> sets the border radius to 1 unit (0.25rem or
            4px).
          </Section>
          <Section code="itemClass">
            Used to set the CSS class added to each dropdown menu item.
            The default value is <code>item no-hover</code>.  The{' '}
            <code>no-hover</code> class suppresses the hover styles that
            would usually be applied to menu items.  Instead the{' '}
            <code>active</code> class is added to the active item, selected
            either by hovering over it or by keyboard navigation.
          </Section>
          <Section code="separatorClass">
            Used to set the CSS class added to the dropdown menu separator.
            The default value is <code>separator</code>.
          </Section>
        </div>
        <div className="flow">
          <Heading title="Components"/>
          <Section code="Trigger" id="Trigger-component">
            Renders the dropdown menu trigger.  Defaults
            to <code>DropdownTrigger</code>.
          </Section>
          <Section code="Menu" id="Menu-component">
            Renders the dropdown menu.  Defaults
            to <code>DropdownMenu</code>.
          </Section>
          <Section code="Separator" id="Separator-component">
            Renders a separator between menu items.  Defaults
            to <code>DropdownSeparator</code>.
          </Section>
        </div>
      </Split>
    </Sections>
  </div>

export default DropdownExamples