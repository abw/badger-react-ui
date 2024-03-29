import { addInputType } from '@abw/badger-form'
import Select from './Input/Select.jsx'
import Search from './Input/Search.jsx'
export {
  Form, Field, Fields, Fieldset, Errors, Status, Debug,
  Layout, Label, Input, Message,
  UseField, UseForm, useField, useForm
} from '@abw/badger-form'

addInputType('uiselect', Select)
addInputType('search', Search)

export * from './Control/index.js'

