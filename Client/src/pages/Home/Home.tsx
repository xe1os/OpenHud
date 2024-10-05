import React from 'react'
import { Sidebar } from '../Sidebar'
import { Dashboard } from '../Dashboard'

export const Home = () => {
  return (
    <div className='grid gap-4 p-4 grid-cols-[220px,_1fr]'>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}
