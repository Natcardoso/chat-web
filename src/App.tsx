import { useContext, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./Context/authContext";
import Chatweb from "./pages/Chatweb";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Loading } from "./components/Loading";

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
                        path="/chat-web"
                        element={
                            <ProtectRoute>
                                <Chatweb loading={loading} />
                                {loading && <Loading />}
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
