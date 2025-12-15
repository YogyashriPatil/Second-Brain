import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Card } from './components/ui/Card'
import { Doc } from './icons/Doc'

function App() {

  return (
    <div className='bg-purple-50'>
      <div className='flex justify-end gap-4'>
          <Button startIcon={<ShareIcon size='lg'/>}  size='sm' variant='primary' text='Share Brain' />
          <Button startIcon={<PlusIcon size='lg' />} size='sm' variant='secondary' text='Add Content' />
      </div>
      Second Brain
      <div className='flex'>
        <Card title='first tweet' link='http.asd/f' type='twitter'/>
        <Card title='Video first ' link='http.asd/f' type='youtube'/>

      </div>

    </div>
  )
}

export default App
