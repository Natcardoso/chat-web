import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Loading } from "./components/Loading";
import { AuthContext } from "./Context/authContext";
import Chatweb from "./pages/Chatweb";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
    const { currentUser, userActive } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const ProtectRoute = ({ children }: any): JSX.Element => {
        setLoading(true);
        if (!currentUser && userActive == "") {
            return <Navigate to="/login" />;
        }

        setLoading(false);

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
                                <Chatweb loading={loading} />
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
