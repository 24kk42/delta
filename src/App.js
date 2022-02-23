import "./App.css";
import LoginPage from "./Pages/Login/Login.js";
import AdminPage from "./Pages/Admin/Admin";
import Users from "./Pages/Admin/Users/Users";
import Teachers from "./Pages/Admin/Teachers";
import Students from "./Pages/Admin/Students";
import { Route, Routes } from "react-router-dom";
import Lessons from "./Pages/Admin/Lessons";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/users" element={<Users/>} />
        <Route path="/teachers" element={<Teachers/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/lessons" element={<Lessons/>} />
      </Routes>
  );
}

export default App;
