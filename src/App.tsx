import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chatweb from "./pages/Chatweb";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/chat" element={<Chatweb />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
