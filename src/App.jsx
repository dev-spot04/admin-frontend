import React from "react";
import { Routes, Route } from "react-router-dom";
import {LogIn, AdminDashboard, NotFound, Profile, UnAuthorized, DjDashboard, BookingDashboard } from "./pages";
import ProtectedRoutes from "./helper/ProtectedRoutes";
// const LazyDjs = React.lazy(() => import("./pages/djs/Djs"));

function App() {
  return (
    <>
      <Routes>

        {/*  admin access */}
        <Route element={<ProtectedRoutes userType={"Admin"} /> }>
          <Route index path="/admin-dashboard" element={<AdminDashboard />}/>
          <Route path='/profile' element= {<Profile/>} />
          <Route path='/admin-dashboard/djs' element={<DjDashboard/>} />
          <Route path='/admin-dashboard/bookings' element={<BookingDashboard/>} />
          <Route path='/user/:id' element={<Profile />} />
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
