import Select from './Input/Select.jsx'
import Search from './Input/Search.jsx'
import * as BadgerForm from '@abw/badger-form'
import { addInputType } from '@abw/badger-form'
import { Themed }     from '@/src/Theme.jsx'
export {
  UseField, UseForm, useField, useForm,
  inputClasses, statusClasses, fieldClass,
  addInputType
} from '@abw/badger-form'

addInputType('uiselect', Select)
addInputType('search', Search)

export const Form          = Themed(BadgerForm.Form,      'Form')
export const Field         = Themed(BadgerForm.Field,     'Field')
export const Fields        = Themed(BadgerForm.Fields,    'Fields')
export const Fieldset      = Themed(BadgerForm.Fieldset,  'Fieldset')
export const Errors        = Themed(BadgerForm.Errors,    'Errors')
export const Status        = Themed(BadgerForm.Status,    'Status')
export const Debug         = Themed(BadgerForm.Debug,     'Debug')
export const Layout        = Themed(BadgerForm.Layout,    'Layout')
export const Label         = Themed(BadgerForm.Label,     'Label')
export const Input         = Themed(BadgerForm.Input,     'Input')
export const Message       = Themed(BadgerForm.Message,   'Message')
export const CheckboxInput = Themed(BadgerForm.Checkbox,  'CheckboxInput')
export const HiddenInput   = Themed(BadgerForm.Hidden,    'HiddenInput')
export const RadioInput    = Themed(BadgerForm.Radio,     'RadioInput')
export const SelectInput   = Themed(BadgerForm.Select,    'SelectInput')
export const TextInput     = Themed(BadgerForm.Text,      'TextInput')
export const TextAreaInput = Themed(BadgerForm.TextArea,  'TextAreaInput')

export { default as Submitting } from './Submitting.jsx'
export * from './Control/index.js'

