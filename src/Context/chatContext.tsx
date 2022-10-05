import { createContext, ReactNode, useContext, useReducer } from "react";
import { AuthContext } from "./authContext";

type chatContext = {
    dispatch: any;
    data: any;
};

type Props = {
    children: ReactNode;
};

export const ChatContext = createContext<chatContext>({} as chatContext);

export const ChatContextProvider = ({ children }: Props) => {
    const { currentUser } = useContext(AuthContext);

    const initial_state = {
        chatId: "null",
        user: {},
    };

    const chatReducer = (state = initial_state, action: any) => {
        switch (action.type) {
            case "change_user":
                return {
                    user: action.payload,
                    chatId:
                        currentUser.uid > action.payload.uid
                            ? currentUser.uid + action.payload.uid
                            : action.payload.uid + currentUser.uid,
                };

            default: {
                return state;
            }
        }
    };

    const [state, dispatch] = useReducer(chatReducer, initial_state);

    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};
