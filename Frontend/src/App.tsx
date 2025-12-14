import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <div>
        <Button startIcon={<ShareIcon />}  size='md' variant='primary' text='Share Brain' />
        <Button startIcon={<PlusIcon size='lg' />} size='md' variant='secondary' text='Add Content' />
    </div>
  )
}

export default App
