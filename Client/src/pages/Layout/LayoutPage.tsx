import React from 'react'
import { Sidebar } from '../Sidebar'
import { Dashboard } from '../Dashboard'

export const LayoutPage = () => {
  return (
    <main className='grid gap-4 p-4 grid-cols-[220px, _1fr]'>
      <Sidebar />
      <Dashboard />
    </main>
  )
}
