import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Card } from './components/ui/Card'
import { Doc } from './icons/Doc'
import { CreateContentModel } from './components/CreateContentModel'

function App() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className='bg-purple-50'>
      <CreateContentModel open={modalOpen} onClose={() => {
        setModalOpen(false)
      }} />
      <div className='flex justify-end gap-4'>
          <Button startIcon={<ShareIcon size='lg'/>}  size='sm' variant='primary' text='Share Brain' />
          <Button onClick={() => {
            setModalOpen(true)
          }} startIcon={<PlusIcon size='lg' />} size='sm' variant='secondary' text='Add Content' />
      </div>
      Second Brain
      <div className='flex gap-3'>
        <Card title='First tweet' link='https://x.com/YogyashriP/status/1963830234722992432' type='twitter'/>
        <Card title='video that i want to watch' link='https://www.youtube.com/embed/N5LkiQ4_nT0?si=6Lui3doR3PBa1yD8' type='youtube' />
      </div>

    </div>
  )
}

export default App
