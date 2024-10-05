import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';

export const Search = () => {
  return (
    <>
        <div className='bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm'>
            <SearchIcon className='text-stone-500'/>
            <input type='text' placeholder='Search' className='bg-transparent focus:outline-none w-full'/>
            <span className='flex gap-0.5 items-center shadow p-1 text-xs bg-stone-50 rounded absolute right-1.5'>
                /
            </span>
            {/* TODO:  Look into cmdk search bar*/}
        </div>
    </>
  )
}
