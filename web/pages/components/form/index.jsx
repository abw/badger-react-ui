import React        from 'react'
import Example      from '@/site/Example.jsx'
import Heading      from '@/page/Heading.jsx'
import Sections     from '@/page/Sections.jsx'
// import Section      from '@/page/Section.jsx'
import Link         from '@/ui/Link.jsx'
import Submitting   from './_examples/submitting/index.jsx'
import CancelSubmit from './_examples/CancelSubmit/index.jsx'
import ResetSubmit  from './_examples/ResetSubmit/index.jsx'
import UISelect     from './_examples/uiselect/index.jsx'
import Search       from './_examples/search/index.jsx'
import BasicForm    from './_examples/BasicForm.jsx'
import BasicFormSrc from './_examples/BasicForm.jsx?raw'

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
    <p>
      There are a few enhancements.  First, the buttons are rendered using
      the <Link to="/components/button" text="Button"/> component, allowing
      them to include icons and all the styling properties.  Secondly, there
      are <code>type</code> bindings which allow you to use more advanced
      components for field inputs.  These are described below.
    </p>
    <Sections tocName="form">
      <Heading title="Input Components"/>
      <UISelect/>
      <Search/>
      <Heading title="Additional Components"/>
      <Submitting/>
      <CancelSubmit/>
      <ResetSubmit/>
    </Sections>
  </div>

export default FormExamples