import { addInputType } from '@abw/badger-form'
import UISelect from './Input/Select.jsx'
// TODO: add input adapters for UI select, search, dropdown
export {
  Form, Field, Fields, Fieldset, Errors, Status, Debug,
  Layout, Label, Input, Message,
  UseField, UseForm, useField, useForm
} from '@abw/badger-form'

addInputType('uiselect', UISelect)

export * from './Control/index.js'

//import * as Form from '@abw/badger-form'
//console.log(`form: `, Object.keys(Form))

