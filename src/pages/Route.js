import React from 'react'
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import { Routes, Route, Link ,BrowserRouter } from "react-router-dom";

export default function Route() {
  return (
        <BrowserRouter>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Error />} />
        </Routes>
        </BrowserRouter>

    );
}
