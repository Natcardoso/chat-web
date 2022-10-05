import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

type dataContext = {
    currentUser: any;
};

type Props = {
    children: ReactNode;
};

export const AuthContext = createContext<dataContext>({} as dataContext);

export const AuthContextProvider = ({ children }: Props) => {
    const [currentUser, setCurrentUser] = useState<User | null>();

    useEffect(() => {
        onAuthStateChanged(auth, (user: User | null) => setCurrentUser(user));
    }, []);
    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
