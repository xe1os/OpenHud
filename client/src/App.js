import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Teams from "./pages/Teams";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Layout from "./pages/Layout";
import Players from "./pages/Players";
import Footer from "./pages/Footer";
import { Hud } from "./pages/Hud";
function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="matches" element={<Matches/>}/>
            <Route path="teams" element={<Teams/>}/>
            <Route path="players" element={<Players/>}/>
            <Route path="hud" element={<Hud/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
