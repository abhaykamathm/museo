import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from './pages/Profile/Profile'
import Login from "./pages/Login/Login";
import { ActiveSales } from "./components/Profile/ActiveSales";
import { PastSales } from "./components/Profile/PastSales";
import ProfilePanel from "./components/Profile/ProfilePanel";

function App() {
  return (
    <div id="root-container">
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/profile/*" element={<Profile />}/>
          <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
