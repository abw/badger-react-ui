import React          from 'react'
import Select         from './_examples/Select/index.jsx'
import Options        from './_examples/options/index.jsx'
import DisplayOption  from './_examples/displayOption/index.jsx'
import DisplayValue   from './_examples/displayValue/index.jsx'
import Sections       from '@/web/page/Sections.jsx'
import Heading from '@/web/page/Heading.jsx'
import Section from '@/web/page/Section.jsx'

const SelectExamples = () =>
  <div className="flow">
    <h1>Select</h1>
    <Select/>
    <Sections tocName="select">
      <Heading title="Properties"/>
      <Options/>
      <DisplayOption/>
      <DisplayValue/>
      <Section code="disabled">
        Boolean flag to set the select input to be disabled.
      </Section>
      <Section code="placeholder">
        Set the placeholder text.  The default is <code>Search</code>.
      </Section>

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
        The default is <code>options</code>.
      </Section>
      <Section code="optionClass">
        Set the class added to each option element.
        The default is <code>option</code>.
      </Section>
      <Section code="activeClass">
        Set the class added to an option that is currently active.
        The default is <code>active</code>.
      </Section>
      <Section code="noOptionsClass">
        Set the class added to the element displayed when there are no
        options to select from. The default is <code>no-options</code>.
      </Section>

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
        Called when an option is selected.  The selection option is passed
        as an argument.
      </Section>

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
      <Section code="NoOptions">
        Renders a message indicating that there are no options to select from.
      </Section>
    </Sections>
  </div>

export default SelectExamples