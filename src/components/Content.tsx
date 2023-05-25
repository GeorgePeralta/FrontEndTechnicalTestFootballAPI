import { useState } from 'react'

import Countries from './Countries'
import Leagues from './Leagues'

import '../app.css'

export default function Content() {
  const [active, setActive] = useState(true)
  return (
    <div className='content-container'>
      <div className='tabs'>
        <div className='tab-pais' onClick={()=> setActive(true)}>
          <h2>Países</h2>
          </div>
        <div className='tab-ligas' onClick={()=> setActive(false)}>
          <h2>Competição</h2>
          </div>
        <div className='tab-times' onClick={()=> setActive(false)}>
          <h2>Times</h2>
          </div>
      </div>
    {active ? <Countries /> : <Leagues />}
    </div>
  )
}
