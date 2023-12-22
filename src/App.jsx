import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { ActiveSales } from "./components/Profile/ActiveSales";
import { PastSales } from "./components/Profile/PastSales";
import ProfilePanel from "./components/Profile/ProfilePanel";
import ProfileReminder from "./components/Profile/ProfileReminder";
import CreateAcccount from "./components/Login/CreateAccount";
import MobileSignIn from "./components/Login/MobileSignIn";
import OtpVerify from "./components/Login/OtpVerify";
import OtpLogin from "./components/Login/OtpLogin";
import AddCard from "./components/Login/AddCard";
import CardAdded from "./components/Login/CardAdded";
import Verification from "./components/Login/Verification";
import VerificationSuccess from "./components/Login/VerificationSuccess";
import Preferences from "./components/Login/Preferences";
import Review from "./components/Login/Review";
import ProfileCompleted from "./components/Login/ProfileCompleted";
import DesktopProfileEnd from "./components/Login/DesktopProfileEnd";

import { useGlobalInfo } from "./contexts/globalContext";
import Live from "./pages/Live/Live";
import { ProfileWallet } from "./components/Profile/ProfileWallet";
import { QRAddNewCard } from "./components/Profile/QRAddNewCard";
import { QRAccountLink } from "./components/Profile/QRAccountLink";
import { QRCodeForProfile } from "./components/Profile/QRCodeForProfile";
import { CompleteProfileCard } from "./components/Profile/CompleteProfileCard";
import { ReadyToCheckOut } from "./components/Profile/ReadyToCheckOut";
import { Help } from "./components/Profile/Help";
import DesktopSignIn from "./components/Login/DesktopSignIn";
import DesktopProfileCompleted from "./components/Login/DesktopProfileCompleted";
import { HowBiddingWorks } from "./components/Profile/HowBiddingWorks";
import RightSideBar from "./components/Filter/RightSideBar";
import ArtistFilter from "./components/Filter/ArtistFilter";
import { Checkout } from "./components/Profile/Checkout";

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
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="" element={<CompleteProfileCard />} />
            <Route path="qrProfile" element={<QRCodeForProfile />} />
            <Route path="yourWallet" element={<ProfileWallet />} />
            <Route path="newCard" element={<QRAddNewCard />} />
            <Route path="linkAccount" element={<QRAccountLink />} />
            <Route path="activeSales" element={<ActiveSales />} />
            <Route path="pastSales" element={<PastSales />} />
            <Route path="readyToCheckOut" element={<ReadyToCheckOut />} />
            <Route path="HowBiddingWorks" element={<HowBiddingWorks />} />
            <Route path="reminder" element={<ProfileReminder />} />
            <Route path="help" element={<Help />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="/createAccount" element={<CreateAcccount />} />
          <Route path="/login/mobileLogin" element={<MobileSignIn />} />
          <Route path="/login/otpVerify" element={<OtpVerify />} />
          <Route path="/login/otpLogin" element={<OtpLogin />} />
          <Route path="/login/addCard" element={<AddCard />} />
          <Route path="/login/cardAdded" element={<CardAdded />} />
          <Route path="/login/verification" element={<Verification />} />
          <Route
            path="/login/successVerification"
            element={<VerificationSuccess />}
          />
          <Route path="/login/preferences" element={<Preferences />} />
          <Route path="/login/review" element={<Review />} />
          <Route path="/login/success" element={<ProfileCompleted />} />
          <Route path="/SignIn" element={<DesktopSignIn />} />
          <Route
            path="/SignIn/Completed"
            element={<DesktopProfileCompleted />}
          />
          <Route path="/SignIn/profileEnd" element={<DesktopProfileEnd />} />
          <Route path="/filter" element={<RightSideBar />} />
          <Route path="/filter/artist" element={<ArtistFilter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
