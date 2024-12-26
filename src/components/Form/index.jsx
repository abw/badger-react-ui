import MultiSelect from './Input/MultiSelect.jsx'
import Select from './Input/Select.jsx'
import Search from './Input/Search.jsx'
import Range from './Input/Range.jsx'
import RangeMin from './Input/RangeMin.jsx'
import RangeMax from './Input/RangeMax.jsx'
import * as BadgerForm from '@abw/badger-form'
import { addInputType } from '@abw/badger-form'
import { Themed }     from '@/src/Theme.jsx'
export {
  UseField, UseForm, useField, useForm,
  inputClasses, statusClasses, fieldClass,
  addInputType
} from '@abw/badger-form'

addInputType('multiselect', MultiSelect)
addInputType('uiselect', Select)
addInputType('search', Search)
addInputType('uirange', Range)
addInputType('rangeminmax', Range)
addInputType('rangemin', RangeMin)
addInputType('rangemax', RangeMax)

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
export const CheckboxField = Themed(BadgerForm.Checkbox,  'CheckboxField')
export const HiddenField   = Themed(BadgerForm.Hidden,    'HiddenField')
export const RadioField    = Themed(BadgerForm.Radio,     'RadioField')
export const SelectField   = Themed(BadgerForm.Select,    'SelectField')
export const TextField     = Themed(BadgerForm.Text,      'TextField')
export const TextAreaField = Themed(BadgerForm.TextArea,  'TextAreaField')

export { default as Submitting } from './Submitting.jsx'
export * from './Control/index.js'

