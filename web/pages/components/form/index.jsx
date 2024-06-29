import React        from 'react'
import Example      from '@/site/Example.jsx'
import DescTable    from '@/site/DescTable.jsx'
import Heading      from '@/page/Heading.jsx'
import Sections     from '@/page/Sections.jsx'
// import Section      from '@/page/Section.jsx'
import Submitting   from './_examples/submitting/index.jsx'
import CancelSubmit from './_examples/CancelSubmit/index.jsx'
import ResetSubmit  from './_examples/ResetSubmit/index.jsx'
import UISelect     from './_examples/uiselect/index.jsx'
import MultiSelect  from './_examples/multiselect/index.jsx'
import Search       from './_examples/search/index.jsx'
import RangeMinMax  from './_examples/range-min-max/index.jsx'
import RangeMax     from './_examples/range-max/index.jsx'
import RangeMin     from './_examples/range-min/index.jsx'
import BasicForm    from './_examples/BasicForm.jsx'
import BasicFormSrc from './_examples/BasicForm.jsx?raw'
import { ButtonLink } from '@/web/site/Links.jsx'

const FormExamples = () =>
  <div className="flow">
    <h1>Form</h1>
    <p className="large wide">
      The library includes{' '}
      <a href="https://abw.github.io/badger-form/">Badger Form</a> for
      rendering form components.
    </p>
    <Example
      Component={BasicForm}
      code={BasicFormSrc}
      caption="Form"
      // expand
    />
    <h2>Components</h2>
    <p>
      The table below lists the component that are exported from{' '}
      <a href="https://abw.github.io/badger-form/">Badger Form</a>.
      In some cases the names have been changed to{' '}
      <strike>protect the innocent</strike> disambiguate and avoid conflicts.
    </p>
    <DescTable
      items={[
        ['Form',          'Main `Form` component, as per badger-form'],
        ['Field',         'Form `Field` component, as per badger-form'],
        ['Fields',        'Form `Fields` component, as per badger-form'],
        ['Fieldset',      'Form `Fieldset` component, as per badger-form'],
        ['Errors',        'Form `Errors` component, as per badger-form'],
        ['Status',        'Form `Status` component, as per badger-form'],
        ['Debug',         'Form `Debug` component, as per badger-form'],
        ['Layout',        'Field `Layout` component, as per badger-form'],
        ['Label',         'Field `Label` component, as per badger-form'],
        ['Input',         'Field `Input` component, as per badger-form'],
        ['Message',       'Field `Message` component, as per badger-form'],
        ['CheckboxField', '`Checkbox` input component from badger-form'],
        ['HiddenField',   '`Hidden` input component from badger-form'],
        ['RadioField',    '`Radio` input component from badger-form'],
        ['SelectField',   '`Select` input component from badger-form'],
        ['TextField',     '`Text` input component from badger-form'],
        ['TextAreaField', '`TextArea` input component from badger-form'],
        ['useForm',       'Hook to access form context, as per badger-form'],
        ['useField',      'Hook to access field context, as per badger-form'],
        ['UseForm',       'Component wrapper to access form context, as per badger-form'],
        ['UseField',      'Component wrapper to access field context, as per badger-form'],
        ['fieldClass',    'Utility function to generate field CSS class'],
        ['inputClasses',  'Utility function to generate input CSS class'],
        ['statusClasses', 'Utility function to generate status CSS class'],
        ['addInputType',  'Utility function to add new input types'],
      ]}
    />

    <p>
      There are a few enhancements.  First, the buttons are rendered using
      the <ButtonLink/> component, allowing
      them to include icons and all the styling properties.  Secondly, there
      are <code>type</code> bindings which allow you to use more advanced
      components for field inputs.  These are described below.
    </p>
    <Sections tocName="form">
      <Heading title="Input Components"/>
      <UISelect/>
      <MultiSelect/>
      <Search/>
      <RangeMinMax/>
      <RangeMax/>
      <RangeMin/>
      <Heading title="Additional Components"/>
      <Submitting/>
      <CancelSubmit/>
      <ResetSubmit/>
    </Sections>
  </div>

export default FormExamples