import React          from 'react'
import Heading        from '@/web/page/Heading.jsx'
import Sections       from '@/web/page/Sections.jsx'
import Section        from '@/web/page/Section.jsx'
import Split          from '@/web/site/Split.jsx'
import Link           from '@/web/ui/Link.jsx'
import DropdownMenu   from './_examples/DropdownMenu/index.jsx'
import Options        from './_examples/options/index.jsx'
import DisplayOption  from './_examples/displayOption/index.jsx'
import OnSelect       from './_examples/onSelect/index.jsx'

const DropdownExamples = () =>
  <div className="flow">
    <h1>Dropdown Menu</h1>
    <DropdownMenu/>
    <Sections tocName="dropdown-menu">
      <Heading title="Properties"/>
      <p className="large">
        All the properties supported by the{' '}
        <Link to="/components/dropdown">Dropdown</Link> component are
        supported.  These are the additional properties specific to
        the <code>DropdownMenu</code>.
      </p>
      <Options/>
      <DisplayOption/>
      <Heading title="Event Handlers"/>
      <OnSelect/>
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
          <Section code="Trigger" id="Trigger-component">
            Renders the dropdown trigger.  Defaults
            to <code>DropdownMenuTrigger</code>.
          </Section>
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
          <Section code="Heading" id="Heading-component">
            Renders a heading item.  Defaults
            to <code>DropdownMenuHeading</code>.
          </Section>
        </div>
      </Split>
    </Sections>
  </div>

export default DropdownExamples