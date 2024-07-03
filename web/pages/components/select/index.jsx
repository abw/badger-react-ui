import React          from 'react'
import Sections       from '@/web/page/Sections.jsx'
import Heading        from '@/web/page/Heading.jsx'
import Section        from '@/web/page/Section.jsx'
import Split          from '@/web/site/Split.jsx'
import Select         from './_examples/Select/index.jsx'
import Options        from './_examples/options/index.jsx'
import Headings       from './_examples/heading/index.jsx'
import Value          from './_examples/value/index.jsx'
import DisplayOption  from './_examples/displayOption/index.jsx'
import DisplayValue   from './_examples/displayValue/index.jsx'
import ValidOption    from './_examples/validOption/index.jsx'
import Search         from './_examples/search/index.jsx'
import SearchOptions  from './_examples/searchOptions/index.jsx'
import Disabled       from './_examples/disabled/index.jsx'
import Separator      from './_examples/separator/index.jsx'
import Indent         from './_examples/indent/index.jsx'
import { CodeHashLink } from '@/web/site/Links.jsx'

const SelectExamples = () =>
  <div className="flow">
    <h1>Select</h1>
    <Select/>
    <Sections tocName="select">
      <Heading title="Properties"/>
      <Options/>
      <Value/>
      <DisplayOption/>
      <DisplayValue/>
      <ValidOption/>
      <Search/>
      <SearchOptions/>
      <Disabled/>
      <Section code="placeholder" split>
        Set the placeholder text.  The default is <code>Select</code>.
      </Section>
      <Section code="noOptions" split>
        Set the text displayed when there are no options to select from.
        The default is <code>No options</code>.
      </Section>
      <Section code="openOnHover" split>
        Flag to indicate that the option menu should open when the cursor
        hovers over the trigger input.  Defaults to <code>false</code>.
      </Section>
      <Section code="closeOnBlur" split>
        Flag to indicate that the option menu should close when focus is lost.
        Defaults to <code>true</code>.
      </Section>
      <Section code="closeDelay" split>
        Delay (in milliseconds) before the menu is closed.  This is required
        to ensure that any click events have been registered before the menu
        is closed. Defaults to <code>300</code>.
      </Section>
      <Heading title="Option Properties"/>
      <Headings/>
      <Separator/>
      <Indent/>

      <Split>
        <div className="flow">
          <Heading title="Event Handlers"/>
          <Section code="onLoad">
            Called when the component is first loaded.  The handler is passed a
            reference to the <code>SearchContext</code> object.
          </Section>
          <Section code="onUnload">
            Called when the component is unloaded.  The handler is passed a
            reference to the <code>SearchContext</code> object.
          </Section>
          <Section code="onFocus">
            Called when the component gains focus.
          </Section>
          <Section code="onBlur">
            Called when the component loses focus.
          </Section>
          <Section code="onClick">
            Called when the component is clicked.
          </Section>
          <Section code="onOpen">
            Called when the component is opened and selectable options are
            displayed.
          </Section>
          <Section code="onClose">
            Called when the component is closed and selectable options are
            hidden.
          </Section>
          <Section code="onSelect">
            Called when an option is selected.  The selected option is passed
            as an argument.
          </Section>
          <Section code="onUpdate">
            If this is defined it will be called instead of any
            <CodeHashLink id="onSelect"/> handler when the selection changes
            due to the <CodeHashLink id="options"/> or <CodeHashLink id="value"/> properties
            changing.
          </Section>
        </div>
        <div className="flow">
          <Heading title="CSS Classes"/>
          <Section code="placeholderClass">
            Set the class for the placeholder text.
            The default is <code>placeholder</code>.
          </Section>
          <Section code="inputClass">
            Set the class for the input element.
            The default is <code>input</code>.
          </Section>
          <Section code="selectingClass">
            Set the class added when a selection is in place.
            The default is <code>selecting</code>.
          </Section>
          <Section code="optionsClass">
            Set the class added for the options container.
            The default is <code>menu border bdr-1</code>.
          </Section>
          <Section code="optionClass">
            Set the class added to each option element.
            The default is <code>item</code>.
          </Section>
          <Section code="activeClass">
            Set the class added to an option that is currently active.
            The default is <code>active</code>.
          </Section>
          <Section code="noOptionsClass">
            Set the class added to the element displayed when there are no
            options to select from. The default is <code>none</code>.
          </Section>
        </div>
        <div className="flow">
          <Heading title="Components"/>
          <Section code="Content">
            Renders the content of the select component.
          </Section>
          <Section code="Input">
            Renders the input field.
          </Section>
          <Section code="Options" id="Options-component">
            Renders the selectable options.
          </Section>
          <Section code="Option">
            Renders an individual option.
          </Section>
          <Section code="NoOptions" id="NoOptions-component">
            Renders a message indicating that there are no options to select from.
          </Section>
        </div>
      </Split>
    </Sections>
  </div>

export default SelectExamples