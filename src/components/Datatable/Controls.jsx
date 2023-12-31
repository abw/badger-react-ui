// DEPRECATED?
import React from 'react'
import Context  from './Context.js'
import Sort     from './Sort.jsx'
import PageSize from './PageSize.jsx'
import { Modal, Button } from '@/src/index.jsx'

const Controls = ({
  controlsVisible,
  hideControls,
}) =>
  <Modal
    open={controlsVisible}
    close={hideControls}
  >
    <header>
      <h3>Data Table Controls</h3>
    </header>
    <div className="grid-3 gap-4">
      <PageSize/>
      <Sort/>
    </div>
    <footer className="text-right">
      <Button
        text="OK"
        onClick={hideControls}
      />
    </footer>
  </Modal>

export default Context.Consumer(Controls)