import React from "react";
import { Routes, Route } from "react-router-dom";
import {LogIn, AdminDashboard} from "./pages";
// import { Layout } from "./layouts";
// import { ClipLoader } from "react-spinners";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/user-dashboard" element={<AdminDashboard />}/>
      </Routes>
    </>
  );
}

export default App;
