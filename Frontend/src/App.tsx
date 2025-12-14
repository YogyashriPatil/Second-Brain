import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Card } from './components/ui/Card'
import { Tiktok } from './icons/Tiktok'

function App() {

  return (
    <div>
      <div className='flex p-1 m-2 space-x-3'>
          <Button startIcon={<ShareIcon size='lg'/>}  size='sm' variant='primary' text='Share Brain' />
          <Button startIcon={<PlusIcon size='lg' />} size='sm' variant='secondary' text='Add Content' />
      </div>
      <Card logo={<Tiktok />} title='first tweet' time='12/12/1212' description="it's my first twit" imageLink={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dUV1ycQIhPSruz2r7yrWuWfH1fmHpSNaeQ&s"}/>
    </div>
  )
}

export default App
