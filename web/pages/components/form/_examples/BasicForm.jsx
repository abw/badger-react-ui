/* eslint-disable quotes */
import { Form, Field, ResetSubmit, Debug, Button, Submitting } from '@/src/index'
import { sleep } from '@abw/badger-utils'

/* START */
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Button, Debug, Submitting } from '@abw/badger-react-ui

const instruments = [
  'Guitar',
  'Bass',
  'Drums',
  'Keyboards',
  'Mandolin'
]

const quotes = [
  "Eleven, it's one louder",
  "These go up to eleven",
  "How much more black could this be",
  "The answer is none, none more black",
  "He died in a bizarre gardening accident",
  "You can't really dust for vomit",
  "No, we're all out. Do you wear black?",
  "The sustain, listen to it.",
  "What's wrong with being sexy?"
]

const songs = [
  "Stonehenge",
  "Hell Hole",
  "Sex Farm",
  "Tonight I'm Gonna Rock You",
  "Big Bottom",
  "Heavy Duty",
  "Rock and Roll Creation",
]

const searchQuotes = input =>
  quotes.filter(
    quote => quote
      .toLowerCase()
      .indexOf(input.toLowerCase()) >= 0
  )

const onSubmit = () => sleep(2000).then(
  () => ({ ok: 'All is good' })
)

const FormExample = () =>
  <Form
    className="relative"
    onSubmit={onSubmit}
    resetOnSuccess
  >
    <Field
      name="email"
      label="Email address"
      required
    />
    <Field
      name="password"
      label="Password"
      type="password"
      required
    />
    <Field
      name="instrument"
      type="uiselect"
      label="Instrument"
      options={instruments}
    />
    <Field
      name="songs"
      type="multiselect"
      label="Favourite Songs"
      options={songs}
      sortable
    />
    <Field
      name="quote"
      type="search"
      label="Favourite Quote"
      help="Hint: try 'black' or 'eleven'"
      onSearch={searchQuotes}
    />
    <Field
      label="Volume"
      name="volume"
      type="rangemax"
      default={10}
      showScale
      showTicks
      min={0} max={11}
      required
    />
    <Field
      label="Blackness"
      name="blackness"
      type="rangeminmax"
      showScale
      showTicks
      step={5}
      tickStep={20}
      showValues
      default={[40, 60]}
      displayValue={ value => `${value}%` }
      valuesSize="smaller"
      minRange={10}
      required
    />
    <Field
      name="terms"
      type="checkbox"
      text="I like badgers"
      required
    />
    <ResetSubmit
      space
      submit={{
        color: 'green',
        iconRight: 'arrow-right',
        text: 'Register'
      }}
    />
    <Submitting/>
    { form =>
      <Button
        text="Set Example Form Values"
        className="mar-t-2 wide orange"
        onClick={
          () => form.setValues({
            email: 'nigel@spinal-tap.com',
            password: 'eleven',
            instrument: 'Guitar',
            songs: ['Stonehenge', 'Big Bottom'],
            quote: 'These go up to eleven',
            volume: 11,
            blackness: [10,40],
            terms: true
          })
        }
      />
    }
    <Debug/>
  </Form>

export default FormExample