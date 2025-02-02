import { Button, useComplexState } from '@/src/index'

const values = {
  volume: 11,
  colour: 'black'
}

const onChange = (props: typeof values) => {
  console.log(`Changed:`, props)
  return props
}

const UseComplexStateExample = () => {
  const [state, setters] = useComplexState(
    values,
    {
      onChange
    }
  )

  return (
    <div className="grid-1 gap-4">
      <div className="surface pad-2 border bdr-2">
        <div className="smaller">Volume</div>
        <div className="larger lh-120">{state.volume}</div>
        <div className="flex gap-4 mar-t-4">
          <Button
            text="One Quieter"
            onClick={() => setters.setVolume( volume => volume - 1)}
          />
          <Button
            text="One Louder"
            onClick={() => setters.setVolume( volume => volume + 1)}
          />
          <Button
            text="Go To Eleven"
            onClick={() => setters.setVolume(11)}
          />
        </div>
      </div>
      <div className="surface pad-2 border bdr-2">
        <div className="smaller">Colour</div>
        <div className="larger lh-120">{state.colour}</div>
        <div className="flex gap-4 mar-t-4">
          <Button
            text="Black"
            onClick={() => setters.setColour('black')}
          />
          <Button
            text="More Black"
            onClick={() => setters.setColour('more black')}
          />
          <Button
            text="None More Black"
            onClick={() => setters.setColour('None more black')}
          />
        </div>
      </div>
    </div>
  )
}

export default UseComplexStateExample
