import React      from 'react'
import Heading    from '@/web/page/Heading.jsx'
import Sections   from '@/web/page/Sections.jsx'
import Section    from '@/web/page/Section.jsx'
import Split            from '@/web/site/Split.jsx'
import DropdownMenu     from './_examples/DropdownMenu/index.jsx'
import Options          from './_examples/options/index.jsx'
import OnSelect         from './_examples/onSelect/index.jsx'

const DropdownExamples = () =>
  <div className="flow">
    <h1>Dropdown Menu</h1>
    <DropdownMenu/>
    {/* <Context/> */}
    <Sections tocName="dropdown">
      <Heading title="Properties"/>
      <Options/>
      <OnSelect/>
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
          <Section code="optionClass">
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
          <Section code="Options" id="Options-component">
            Renders the dropdown menu options.  Defaults
            to <code>DropdownMenuOptions</code>.
          </Section>
          <Section code="Option" id="Option-component">
            Renders each dropdown menu option.  Defaults
            to <code>DropdownMenuOption</code>.
          </Section>
          <Section code="Separator" id="Separator-component">
            Renders a separator between menu items.  Defaults
            to <code>DropdownMenuSeparator</code>.
          </Section>
        </div>
      </Split>
    </Sections>
  </div>

export default DropdownExamples