import MultiSelect from './Input/MultiSelect'
import Select from './Input/Select'
import Search from './Input/Search'
import Range from './Input/Range'
import RangeMin from './Input/RangeMin'
import RangeMax from './Input/RangeMax'
import * as BadgerForm from '@abw/badger-form'
import { addInputType } from '@abw/badger-form'
import { Themed }     from '@/src/Theme'
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

export { default as Submitting } from './Submitting'
export * from './Control/index'

