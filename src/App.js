import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './Components/Index';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-black">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
