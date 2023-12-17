import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import AccountCreation from "./pages/Login/AccountCreation";
import MobileLogin from "./pages/Login/MobileLogin";
import OtpLoginPage from "./pages/Login/OtpLoginPage";
import AddCardPage from "./pages/Login/AddCardPage";
import { useGlobalInfo } from "./contexts/globalContext";
import Live from "./pages/Live/Live";

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
          <Route path="/live" element={<Live />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createAccount" element={<AccountCreation />} />
          <Route path="/login/mobileLogin" element={<MobileLogin />} />
          <Route path="/login/otpLogin" element={<OtpLoginPage />} />
          <Route path="/login/addCard" element={<AddCardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
