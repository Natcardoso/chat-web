import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./Context/authContext";
import { ChatContextProvider } from "./Context/chatContext";
import { GlobalStyle } from "./GlobalStyles";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <AuthContextProvider>
        <ChatContextProvider>
            <App />
            <GlobalStyle />
        </ChatContextProvider>
    </AuthContextProvider>
);
