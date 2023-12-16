import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import { useGlobalInfo } from "./contexts/globalContext";

function App() {
  const context = useGlobalInfo();
  return (
    <div
      id="root-container"
      style={{
        background: context.landingView === "carousel" ? "#111" : "",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
