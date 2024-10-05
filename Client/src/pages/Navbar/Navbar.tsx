import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

export const Navbar = () => {

    const location = useLocation();

  if (location.pathname === '/hud') {
    return null; // Do not render the navbar on the HUD route
  }

  return (
    <nav className="fixed flex w-screen h-14 justify-between items-center bg-black text-primary px-5 z-10">
        <Link to="/" className="flex items-center pl-4">
            <img src={Logo} alt="Logo" className="w-20 h-auto" />
        </Link>
      <ul className="flex justify-center items-center gap-10">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/matches">Matches</Link></li>
        <li><Link to="/hud" target='_blank'>HUD</Link></li>
      </ul>
    </nav>
  );
};
