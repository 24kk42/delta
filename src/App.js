import './App.css';
import LoginPage from './Pages/Login/Login.js';
import MainPage from './Pages/Main/Main.js';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
