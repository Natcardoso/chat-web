import React, { ReactNode, useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./Context/authContext";
import Chatweb from "./pages/Chatweb";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
    const { currentUser } = useContext(AuthContext);

    const ProtectRoute = ({ children }: any): JSX.Element => {
        if (!currentUser) {
            return <Navigate to="/login" />;
        }

        return children;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <ProtectRoute>
                                <Chatweb />
                            </ProtectRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
