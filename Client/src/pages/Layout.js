import { Link, Outlet } from "react-router-dom";
import "../styles/layout.css";
import Logo from "../assets/Logo.png";

const Layout = () => {
    return (
        <>
            <nav className="bg-black w-full flex justify-between items-center p-4">
                <Link to="/" className="flex items-center">
                    <img src={Logo} alt="Logo" className="w-20 h-auto" />
                </Link>
                <div className="flex items-center space-x-4">
                    <Link to="/matches" className="text-white hover:text-gray-400">Matches</Link>
                    <Link to="/teams" className="text-white hover:text-gray-400">Teams</Link>
                    <Link to="/players" className="text-white hover:text-gray-400">Players</Link>
                    <Link to="/hud" className="text-white hover:text-gray-400">HUD</Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;
