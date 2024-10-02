import { Link, Outlet } from "react-router-dom";
import "../styles/layout.css";
import Logo from "../assets/Logo.png";

const Layout = () => {
    return (
        <>
            <nav className="bg-black w-full flex justify-between items-center p-1">
                <Link to="/" className="flex items-center pl-4">
                    <img src={Logo} alt="Logo" className="w-20 h-auto" />
                </Link>
                <div className="flex items-center space-x-4 pr-4">
                    <Link to="/teams" className="text-white hover:text-primary">Teams</Link>
                    <Link to="/players" className="text-white hover:text-primary">Players</Link>
                    <Link to="/matches" className="text-white hover:text-primary">Matches</Link>
                    <Link to="/hud" target="_blank" className="text-white hover:text-primary">HUD</Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;
