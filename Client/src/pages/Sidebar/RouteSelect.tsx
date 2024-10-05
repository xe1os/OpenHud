import { SvgIconComponent } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PreviewIcon from '@mui/icons-material/Preview';
import React from 'react'


interface RouteProps {
    selected?: boolean;
    Icon: SvgIconComponent;
    title: string;
    target?: string;
}

const routes = [
    {
        Icon: DashboardIcon,
        title: 'Dashboard'
    },
    {
        Icon: PersonIcon,
        title: 'Players'
    },
    {
        Icon: GroupsIcon,
        title: 'Teams'
    },
    {
        Icon: AddCircleIcon,
        title: 'Matches',
    },
    {
        Icon: PreviewIcon,
        title: 'HUD',
        target: "_blank"
    }
]



export const RouteSelect = () => {
  return (
    <div className='space-y-1'>
        {routes.map((route, index) => {
            return <NavRoutes key={index} Icon={route.Icon} title={route.title} selected={index === 0} target={route.target}/>
        })}
    </div>
  )
}


const NavRoutes = ({selected, Icon, title, target}: RouteProps) => {

    return (
        <Link to={`/${title.toLowerCase()}`}
        target={target} 
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] 
        ${selected 
        ? "bg-white text-stone-950 shadow" 
        : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"}
        `}>
            <Icon className={selected ? "text-violet-500" : ""}/>
            <span>{title}</span>
        </Link>
    )
}