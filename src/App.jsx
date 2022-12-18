import React from "react";
import { Routes, Route } from "react-router-dom";
import {LogIn, AdminDashboard, NotFound, Profile, UnAuthorized} from "./pages";
import ProtectedRoutes from "./helper/ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>

        {/*  admin access */}
        <Route element={<ProtectedRoutes userType={"Admin"} /> }>
          <Route index path="/admin-dashboard" element={<AdminDashboard />}/>
          <Route path='/profile' element= {<Profile/>} />
          <Route path="/unauthorized" element={<UnAuthorized />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* public url */}
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
