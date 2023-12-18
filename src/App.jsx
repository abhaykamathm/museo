import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import { ActiveSales } from "./components/Profile/ActiveSales";
import { PastSales } from "./components/Profile/PastSales";
import ProfilePanel from "./components/Profile/ProfilePanel";
import AccountCreation from "./pages/Login/AccountCreation";
import MobileLogin from "./pages/Login/MobileLogin";
import OtpLoginPage from "./pages/Login/OtpLoginPage";
import AddCardPage from "./pages/Login/AddCardPage";
import CardAddedPage from "./pages/Login/CardAddedPage";
import VerificationPage from "./pages/Login/VerificationPage";
import VerificationSuccessPage from "./pages/Login/VerificationSuccessPage";
import PreferencePage from "./components/Home/PreferencePage";
import ReviewPage from "./pages/Login/ReviewPage";

import { useGlobalInfo } from "./contexts/globalContext";
import Live from "./pages/Live/Live";
import OtpVerifyPage from "./pages/Login/OtpVerifyPage";
import ProfileCompletedPage from "./pages/Login/ProfileCompletedPage";

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
          <Route path="/createAccount" element={<AccountCreation />} />
          <Route path="/login/mobileLogin" element={<MobileLogin />} />
          <Route path="/login/otpVerify" element={<OtpVerifyPage />} />
          <Route path="/login/otpLogin" element={<OtpLoginPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/addCard" element={<AddCardPage />} />
          <Route path="/login/cardAdded" element={<CardAddedPage />} />
          <Route path="/login/verification" element={<VerificationPage />} />
          <Route
            path="/login/successVerification"
            element={<VerificationSuccessPage />}
          />
          <Route path="/login/preferences" element={<PreferencePage />} />
          <Route path="/login/review" element={<ReviewPage />} />
          <Route path="/login/success" element={<ProfileCompletedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
