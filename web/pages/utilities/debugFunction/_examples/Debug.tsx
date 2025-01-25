import { debugFunction } from '@/src/index'

/* START */
// PRETEND: import { debugFunction } from '@abw/badger-react-ui

const DebugExample = () => {
  const debug = debugFunction({
    debug: true,
    debugPrefix: 'Debug Test > ',
    debugColor: 'hotpink'
  })
  return (
    <div>
      <div className="compact info alert border">
        Click these buttons and watch the Javascript console.
      </div>
      <div className="flex gap-4 green">
        <button onClick={() => debug('Hello World!')}>
          Hello
        </button>
        <button onClick={() => debug('Goodbye World!')}>
          Goodbye
        </button>
      </div>
    </div>
  )
}

export default DebugExample