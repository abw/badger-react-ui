import { useCursor } from '@/src/index'
import { noValue } from '@abw/badger-utils'
/* START */
import { useState } from 'react'
// PRETEND: import { useCursor } from '@abw/badger-react-ui

const allAnimals = [
  'Ant',
  'Bat',
  'Cat',
  'Dog',
  'Elk',
  'Fox',
  'Gnu'
]

const UseCursorExample = () => {
  const [animals, setAnimals] = useState(allAnimals)
  const {
    options, cursor, clearCursor,
    setCursorFirst, setCursorLast,
    setCursorNext, setCursorPrev,
    setCursorIndex
  } = useCursor({
    options: animals,
    debug: true,
    debugPrefix: 'useCursor: ',
    debugColor: 'red'
  })

  return (
    <div>
      <div className="menu border">
        { options && options.map(
          (animal,n) =>
            <div className={`item no-hover ${n === cursor ? 'active' : ''}`} key={animal as string}>
              {animal as string}
            </div>
        )}
      </div>

      <div className="larger mar-v-2">
        Cursor: {cursor ?? 'null'}
      </div>

      <p className="mar-b-2 lh-120">
        Use these buttons to reset the cursor, or set it to the first, last,
        previous or next index.
      </p>
      <div className="flex gap-4 green">
        <button onClick={clearCursor} className="red" disabled={noValue(cursor)}>
          Reset
        </button>
        <button onClick={setCursorFirst}>
          First
        </button>
        <button onClick={setCursorPrev} className="blue" disabled={noValue(cursor)}>
          Prev
        </button>
        <button onClick={setCursorNext} className="blue" disabled={noValue(cursor)}>
          Next
        </button>
        <button onClick={setCursorLast}>
          Last
        </button>
      </div>

      <p className="mar-b-2 lh-120">
        Use these buttons to set the index to a specific value.  An index outside
        of the valid range will be clamped to the nearest value.
      </p>
      <div className="flex gap-4 yellow">
        <button onClick={() => setCursorIndex(-3)}>
          -3
        </button>
        <button onClick={() => setCursorIndex(1)}>
          1
        </button>
        <button onClick={() => setCursorIndex(3)}>
          3
        </button>
        <button onClick={() => setCursorIndex(5)}>
          5
        </button>
        <button onClick={() => setCursorIndex(99)}>
          99
        </button>
      </div>

      <p className="mar-b-2 lh-120">
        Use these buttons to change the items in the options array.
      </p>
      <div className="flex gap-4 orange">
        <button onClick={() => setAnimals(allAnimals.slice(0, 3))}>
          First 3 Animals
        </button>
        <button onClick={() => setAnimals(allAnimals)}>
          All Animals
        </button>
        <button onClick={() => setAnimals(allAnimals.slice(-3))}>
          Last 3 Animals
        </button>
      </div>
    </div>
  )
}

export default UseCursorExample