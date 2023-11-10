import React, { useState }  from 'react'
import ColorSelect          from '@/demo/control/ColorSelect.jsx'
import SizeSelect           from '@/demo/control/SizeSelect.jsx'
import IconSelect           from '@/demo/control/IconSelect.jsx'
import CodeBlock            from '@/site/CodeBlock.jsx'
import { Icon }      from '@/src/index.jsx'

const IconDemo = () => {
  const [n, setN] = useState(0)
  const [options, setOptions] = useState({
    name:       'bars',
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
  const props  = iconProps(options)
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
  const setName  = setOption('name')
  const setSize  = setOption('size')
  const setColor = setOption('color')

  return (
    <div>
      <div className="grid-3 gap-h-4 stack-mobile top">
        <div className="field">
          <label>Icon Name</label>
          <IconSelect
            icon={options.name}
            setIcon={setName}
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
      </div>
    </div>
  )
}

const iconProps = options => {
  const textProps = [
    'name', 'color', 'size',
  ]
    .filter( option => options[option] )
    .map( option => `${option}="${options[option]}"`)


  return [
    ...textProps,
  ].join(`\n  `)
}

const Output = ({ options }) =>
  <Icon {...options} />

export default IconDemo

