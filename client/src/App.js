import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Game from './components/Games/Game.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/game' element={<Game />} />
        <Route path='/game/:id' element={<Game />} />
        <Route path='/' element={<Navigate to="/game" replace />} />
      </Routes>
    </Router>
  );
}

export default App;