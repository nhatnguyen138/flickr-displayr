import { Routes, Route } from 'react-router-dom';

import Gallery from './pages/Gallery'
import Credit from './pages/Credit'

import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="AppContent">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/credit" element={<Credit />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
