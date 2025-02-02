import { Button } from '@/src/index'
import { useStateObject } from '@/src/hooks/useStateObject'

const values = {
  volume: 11,
  colour: 'black'
}

const onChange = (props: typeof values, oldProps: typeof values) => {
  if (props.volume === 0) {
    console.log(`That's too quiet!  I'm not playing`)
    return oldProps
  }
  console.log(`useStateObject changed:`, props)
  return props
}

const UseComplexStateExample = () => {
  const [state, setState, setters] = useStateObject(
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
            onClick={
              () => setState( state => ({ volume: state.volume - 1 }) )
            }
          />
          <Button
            text="One Louder"
            onClick={
              () => setters.setVolume( volume => volume + 1 )
            }
          />
          <Button
            text="Go To Ten"
            onClick={() => setState({ volume: 10 })}
          />
          <Button
            text="Go To Eleven"
            onClick={() => setters.setVolume(11)}
          />
          <Button
            text="No Volume (does nothing)"
            onClick={() => setState({ volume: 0 })}
          />
        </div>
      </div>
      <div className="surface pad-2 border bdr-2">
        <div className="smaller">Colour</div>
        <div className="larger lh-120">{state.colour}</div>
        <div className="flex gap-4 mar-t-4">
          <Button
            text="Black"
            onClick={() => setState({ colour: 'black' })}
          />
          <Button
            text="More Black and Louder"
            onClick={
              () => setState(
                state => ({ colour: 'more black', volume: state.volume + 1})
              )
            }
          />
          <Button
            text="None More Black"
            onClick={
              () => setState({ colour: 'None more black', volume: 11 })
            }
          />
        </div>
      </div>
      {/*
      */}
    </div>
  )
}

export default UseComplexStateExample
