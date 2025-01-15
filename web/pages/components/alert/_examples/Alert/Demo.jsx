import React, { useState }  from 'react'
import ColorSelect          from '@/demo/control/ColorSelect.jsx'
import SizeSelect           from '@/demo/control/SizeSelect.jsx'
import RadiusSelect         from '@/demo/control/RadiusSelect.jsx'
import ShadowSelect         from '@/demo/control/ShadowSelect.jsx'
import CheckOption          from '@/demo/control/CheckOption.jsx'
import BorderSelect         from '@/demo/control/BorderSelect.jsx'
import IconSelect           from '@/demo/control/IconSelect.jsx'
import { Source }           from '@abw/badger-website'
import { Alert, Icon }      from '@/src/index'

const AlertDemo = () => {
  const [n, setN] = useState(0)
  const [options, setOptions] = useState({
    headline:   '',
    title:      '',
    text:       'Hello World!',
    revealable: false,
    stripe:     false,
  })
  const toggleOption = name => () => {
    setOptions(
      options => ({
        ...options,
        [name]: ! options[name]
      })
    )
    setN(n => n + 1)
  }
  const setOption = name => value => {
    setOptions(
      options => ({
        ...options,
        [name]: value
      })
    )
    setN(n => n + 1)
  }
  const props  = alertProps(options)
  const output = `<Alert\n  ${props}\n/>`

  return (
    <div className="example grid-2 gap-h-8 stack-desktop">
      <div>
        <div className="field">
          <label>Output</label>
          <div className="output mar-b-8">
            <Output
              options={options}
              key={n}
            />
          </div>
        </div>
        <div className="field">
          <label>Markup</label>
          <Source
            code={output}
            language="html"
            expand
          />
        </div>
      </div>
      <Controls
        options={options}
        setOption={setOption}
        toggleOption={toggleOption}
      />
    </div>
  )
}

const Controls = ({ options, toggleOption, setOption }) => {
  const setHeadline      = setOption('headline')
  const setTitle         = setOption('title')
  const setText          = setOption('text')
  const setType          = setOption('type')
  const setSize          = setOption('size')
  const setColor         = setOption('color')
  const setBorder        = setOption('border')
  const setRadius        = setOption('radius')
  const setShadow        = setOption('shadow')
  const setIcon          = setOption('icon')
  const setHeadIcon      = setOption('headIcon')
  const toggleStripe     = toggleOption('stripe')
  const toggleRevealable = toggleOption('revealable')

  return (
    <div>
      {/* <h3 className="mar-b-2">Options</h3> */}
      <TextField
        label="Headline"
        value={options.headline}
        setValue={setHeadline}
      />
      <TextField
        label="Title"
        value={options.title}
        setValue={setTitle}
      />
      <TextField
        label="Text"
        value={options.text}
        setValue={setText}
      />
      <div className="grid-2 gap-h-4 stack-mobile top">
        <div className="field">
          <label>Type</label>
          <TypeSelect
            type={options.type}
            setType={setType}
          />
        </div>
        <div className="field">
          <label>Color</label>
          <ColorSelect
            color={options.color}
            setColor={setColor}
            disabled={options.type}
          />
        </div>
        <div className="field">
          <label>Size</label>
          <SizeSelect
            size={options.size}
            setSize={setSize}
          />
        </div>
        <div className="field">
          <label>Shadow</label>
          <ShadowSelect
            shadow={options.shadow}
            setShadow={setShadow}
          />
        </div>
        <div className="field">
          <label>Border Width</label>
          <BorderSelect
            border={options.border}
            setBorder={setBorder}
            disabled={options.stripe}
          />
        </div>
        <div className="field">
          <label>Border Radius</label>
          <RadiusSelect
            radius={options.radius}
            setRadius={setRadius}
          />
        </div>
        <div className="field">
          <label>Headline Icon</label>
          <IconSelect
            icon={options.headIcon}
            setIcon={setHeadIcon}
            disabled={! options.headline}
          />
        </div>
        <div className="field">
          <label>Body Icon</label>
          <IconSelect
            icons={options.icon}
            setIcon={setIcon}
          />
        </div>
      </div>
      <div className="field">
        <label>Options</label>
        <div className="grid-2 gap-h-4 stack-mobile top">
          <CheckOption
            checked={options.stripe}
            toggle={toggleStripe}
            label="Stripe"
          />
          <CheckOption
            checked={options.revealable}
            toggle={toggleRevealable}
            label="Revealable"
            disabled={! options.headline}
          />
        </div>
      </div>
    </div>
  )
}

const alertProps = options => {
  const textProps = [
    'headline', 'title', 'text',
    'type', 'color', 'size',
    'headIcon', 'icon'
  ]
    .filter( option => options[option] )
    .map( option => `${option}="${options[option]}"`)

  const numProps = [
    'shadow', 'border', 'radius',
  ]
    .filter( option => options[option] )
    .map( option => `${option}={${options[option]}}`)

  const optProps = [
    'stripe', 'revealable', 'dismissable'
  ]
    .filter( option => options[option] )

  return [
    ...textProps,
    ...numProps,
    ...optProps
  ].join(`\n  `)
}

const Output = ({ options }) =>
  <Alert {...options} />

const TypeSelect = ({ type, setType }) =>
  <select
    name="type"
    required
    value={type}
    onChange={ e => setType(e.target.value) }
  >
    <option value="" hidden disabled selected>Type</option>
    <option value="">Default</option>
    { ['info', 'warning', 'success', 'error'].map(
      type =>
        <option
          key={type}
          value={type}
        >
          {type}
        </option>
    )}
  </select>

const TextField = ({
  label,
  value,
  setValue
}) =>
  <div className="field">
    <label>{label}</label>
    <div className="inputs">
      <input
        type="text"
        name="headline"
        value={value}
        onChange={ e => setValue(e.target.value)}
      />
      <div className="suffix">
        <Icon
          name="cross"
          className="hover"
          onClick={() => setValue('')}
        />
      </div>
    </div>
  </div>


export default AlertDemo

