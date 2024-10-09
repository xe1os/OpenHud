import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const date = new Date().toDateString()

export const Topbar = () => {
  return (
    <div id='TopBar' className='border-b px-4 mb-4 mt-2 pb-4 border-border'>
        <div className='flex items-center justify-center p-0.5'>
            <div className='flex flex-col justify-center'>
                <span className='text-xl font-bold'>Welcome</span>
                <span className='text-xs block text-stone-400'>{date}</span>
            </div>
            {/* <button className='flex text-textcolor text-sm items-center gap-2 p-0.5 bg-button hover:bg-border px-3 py-1.5 rounded transition-colors'>
                <CalendarMonthIcon/>
                <span className='text-sm'>Schedule a game</span>
            </button> */}
        </div>
    </div>
  )
}
