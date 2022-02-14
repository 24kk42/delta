import './App.css';
import LoginPage from './Pages/Login/Login.js';
import AdminPage from './Pages/Login/Admin';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
    </div>
  );
}

export default App;
