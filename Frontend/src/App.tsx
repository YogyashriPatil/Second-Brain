import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <div className='flex items-center p-1 m-2 justify-between'>
        <Button startIcon={<ShareIcon size='lg'/>}  size='md' variant='primary' text='Share Brain' />
        <Button startIcon={<PlusIcon size='lg' />} size='md' variant='secondary' text='Add Content' />
    </div>
  )
}

export default App
