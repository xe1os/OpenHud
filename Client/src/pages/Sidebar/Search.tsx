import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
    <>
        <div className='w-full bg-background2 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm text-textcolor gap-2'>
            <SearchIcon/>
            <input type='text' placeholder='Search' className='bg-transparent focus:outline-none w-full'/>
            {/* TODO:  Look into cmdk search bar*/}
        </div>
    </>
  )
}
