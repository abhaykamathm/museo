import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import SocialLogin from "../../components/Login/SocialLogin";
import CreateAcccount from "../../components/Login/CreateAccount";

function Login() {
  return (
    <div id="Login-Container">
      {/* <SocialLogin /> */}
      <CreateAcccount />
      <Outlet />
    </div>
  );
}

export default Login;
