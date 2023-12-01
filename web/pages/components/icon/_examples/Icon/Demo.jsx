import React, { useState }  from 'react'
import { Icon }             from '@/src/index.jsx'
import IconSelect           from '@/demo/control/IconSelect.jsx'
import SizeSelect           from '@/demo/control/SizeSelect.jsx'
import ColorSelect          from '@/demo/control/ColorSelect.jsx'
import StopSelect           from '@/demo/control/StopSelect.jsx'
import CodeBlock            from '@/site/CodeBlock.jsx'

const IconDemo = () => {
  const [n, setN] = useState(0)
  const [options, setOptions] = useState({
    name: 'bars',
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
          <CodeBlock
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

const Controls = ({ options, setOption }) => {
  const setName       = setOption('name')
  const setSize       = setOption('size')
  const setColor      = setOption('color')
  const setForeground = setOption('foreground')
  const setBackground = setOption('background')
  const setForeDark   = setOption('foregroundDark')
  const setBackDark   = setOption('backgroundDark')

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

      </div>
    </div>
  )
}

const iconProps = options => {
  const props = [
    'name', 'size', //'color', 'foreground', 'background',
  ]
    .filter( option => options[option] )
    .reduce(
      (props, option) => {
        props[option] = options[option]
        return props
      },
      { }
    )

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

