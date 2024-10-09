import Box from '@mui/material/Box'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

export const LandingPage = () => {
    const location = useLocation();
    return (
    <div className={`LandingPage size-full ${location.pathname === '/hud' ? '' : 'dark text-stone-950 bg-stone-100'}`}>
    {location.pathname === '/' && (
        <Box className='bg-background flex justify-center items-center size-full gap-4 '>
            <NavLink to='/admin' className="size-96 bg-button rounded shadow flex justify-center items-center text-textcolor text-8xl p-4 text-center">Admin Panel</NavLink>
            <NavLink to='/hud' className="size-96 bg-button rounded shadow flex justify-center items-center text-textcolor text-8xl p-4" target='_blank'>HUD</NavLink>
        </Box>
    )}
    <Outlet />
    </div>
  )
}
