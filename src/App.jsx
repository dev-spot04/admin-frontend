import React from "react";
import { Routes, Route } from "react-router-dom";
import {LogIn, AdminDashboard, NotFound, UnAuthorized} from "./pages";
import ProtectedRoutes from "./helper/ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>

        {/*  admin access */}
        <Route element={<ProtectedRoutes userType={"Admin"} /> }>
          <Route index path="/admin-dashboard" element={<AdminDashboard />}/>
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
