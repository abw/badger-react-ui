import React, { useState }  from 'react'
import { Icon }             from '@/src/index'
import CheckOption          from '@/demo/control/CheckOption'
import IconSelect           from '@/demo/control/IconSelect'
import SizeSelect           from '@/demo/control/SizeSelect'
import ColorSelect          from '@/demo/control/ColorSelect'
import StopSelect           from '@/demo/control/StopSelect'
import RotationSelect       from '@/demo/control/IconRotationSelect'
import ThicknessSelect      from '@/demo/control/IconThicknessSelect'
import { Source }           from '@abw/badger-website'

const IconDemo = () => {
  const [n, setN] = useState(0)
  const [options, setOptions] = useState({
    name: 'arrow',
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
  const props  = iconPropStrings(options)
  const output = `<Icon\n  ${props}\n/>`

  return (
    <div className="example grid-2 gap-8 stack-desktop">
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

const Controls = ({ options, setOption, toggleOption }) => {
  const setName       = setOption('name')
  const setSize       = setOption('size')
  const setColor      = setOption('color')
  const setForeground = setOption('foreground')
  const setBackground = setOption('background')
  const setForeDark   = setOption('foregroundDark')
  const setBackDark   = setOption('backgroundDark')
  const setRotation   = setOption('rotation')
  const setThickness  = setOption('thickness')
  const toggleSquare  = toggleOption('square')
  const toggleFlipX   = toggleOption('flipx')
  const toggleFlipY   = toggleOption('flipy')

  return (
    <div>
      <div className="grid-3 gap-4 stack-mobile top">
        <div className="field">
          <label>Icon Name</label>
          <IconSelect
            icon={options.name}
            setIcon={setName}
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
          <label>Color</label>
          <ColorSelect
            color={options.color}
            setColor={setColor}
            disabled={options.type}
          />
        </div>
      </div>
      <div className="grid-2 gap-4 gap-v-0 stack-mobile top">
        <div className="field">
          <label>Foreground Stop</label>
          <StopSelect
            stop={options.foreground}
            setStop={setForeground}
            // disabled={! options.color}
          />
        </div>
        <div className="field">
          <label>Background Stop</label>
          <StopSelect
            stop={options.background}
            setStop={setBackground}
            // disabled={! options.color}
          />
        </div>
        <div className="field">
          <label>Foreground Dark</label>
          <StopSelect
            stop={options.foregroundDark}
            setStop={setForeDark}
            // disabled={! options.color}
          />
        </div>
        <div className="field">
          <label>Background Dark</label>
          <StopSelect
            stop={options.backgroundDark}
            setStop={setBackDark}
            // disabled={! options.color}
          />
        </div>
        <div className="field">
          <label>Rotation</label>
          <RotationSelect
            rotation={options.rotation}
            setRotation={setRotation}
          />
        </div>
        <div className="field">
          <label>Thickness</label>
          <ThicknessSelect
            thickness={options.thickness}
            setThickness={setThickness}
          />
        </div>
      </div>
      <div className="field">
        <label>Options</label>
        <div className="grid-3 gap-4 gap-v-0 stack-mobile top">
          <CheckOption
            checked={options.square || false}
            toggle={toggleSquare}
            label="Square"
          />
          <CheckOption
            checked={options.flipx || false}
            toggle={toggleFlipX}
            label="Flip X"
          />
          <CheckOption
            checked={options.flipy || false}
            toggle={toggleFlipY}
            label="Flip Y"
          />
        </div>
      </div>
    </div>
  )
}

const iconProps = options => {
  const props = ['name', 'size']
    .filter( option => options[option] )
    .reduce(
      (props, option) => {
        props[option] = options[option]
        return props
      },
      { }
    )

  const modifiers = ['rotation', 'thickness']
    .filter( option => options[option] )
    .map( option => options[option] )

  modifiers.push(
    ...['square', 'flipx', 'flipy']
      .filter( option => options[option] )
  )
  if (modifiers.length) {
    props.name = props.name + modifiers.map( m => `-${m}` ).join('')
  }

  const color = [
    'color', 'foreground', 'background', 'foregroundDark', 'backgroundDark'
  ]
    .map( option => options[option] || '' )
    .join('-')

  if (color.length > 4) {
    props.color = color.replace(/-*$/, '')
  }

  return props
}

const iconPropStrings = options => {
  const props = iconProps(options)
  return Object.entries(props)
    .map(
      ([name, value]) => `${name}="${value}"`
    )
    .join('\n  ')
}

const Output = ({ options }) =>
  <Icon {...iconProps(options)} />

export default IconDemo

