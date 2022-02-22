import "./App.css";
import LoginPage from "./Pages/Login/Login.js";
import AdminPage from "./Pages/Admin/Admin";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
  );
}

export default App;
