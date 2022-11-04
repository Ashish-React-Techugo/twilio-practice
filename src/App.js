import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import ScreenRecording from './pages/ScreenRecording';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Link to='/screenrecording'>ScreenRecording</Link>
      </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/screenrecording' element={<ScreenRecording/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
