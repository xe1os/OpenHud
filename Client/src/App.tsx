import { Routes, Route, useLocation } from 'react-router-dom';
import { HUD } from './HUD/HUD';
import { Home } from './pages/Home';

function App() {
  const location = useLocation();
  return (
    <div className="App text-stone-950 bg-stone-100 size-full">
        {location.pathname !== '/hud' && <Home />}
        <Routes>
          <Route path="/hud" element={<HUD />} />
        </Routes>
    </div>
  );
}

export default App;
