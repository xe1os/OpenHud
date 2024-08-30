import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Layout from "./pages/Layout";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Tournaments from "./pages/Tournaments";
import Sidebar from "./components/Sidebar";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Account from "./pages/Account";
import Register from "./pages/Register";
import { Hud } from "./pages/Hud";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="matches" element={<Matches/>}/>
            <Route path="teams" element={<Teams/>}/>
            <Route path="players" element={<Players/>}/>
            <Route path="tournaments" element={<Tournaments/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="logout" element={<Logout/>}/>
            <Route path="account" element={<Account/>}/>
            <Route path="register" element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Hud/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
