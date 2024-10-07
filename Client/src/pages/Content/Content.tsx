import React from 'react'
import { Topbar } from '../Dashboard/Topbar'
import { Grid } from '../Dashboard/Grid'

export const Content = () => {
    return (

        <main id='Content' className='bg-background2 relative text-textcolor rounded-lg pb-4 shadow h-full flex flex-col'>
            <Topbar/>
            <Grid/>
        </main>

      )
}