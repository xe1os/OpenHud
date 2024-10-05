import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const date = new Date().toDateString()

export const Topbar = () => {
  return (
    <div className='border-b px-4 mb-4 mt-2 pb-4 border-stone-200'>
        <div className='flex items-center justify-between p-0.5'>
            <div>
                <span className='text-sm font-bold'>Good morning!</span>
                <span className='text-xs block text-stone-500'>{date}</span>
            </div>
            <button className='flex text-sm items-center gap-2 p-0.5 bg-stone-100 hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded transition-colors'>
                <CalendarMonthIcon className='text-stone-500'/>
                <span className='text-sm'>Schedule a game</span>
            </button>
        </div>
    </div>
  )
}
