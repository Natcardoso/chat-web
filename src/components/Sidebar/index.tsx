import { Container } from "./styles";
import { BsChatDots } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { ChatContext } from "../../Context/chatContext";

export function Sidebar() {
    const { dispatch } = useContext(ChatContext);

    return (
        <Container>
            <div>
                <BsChatDots size={40} />
                <span>ChatWeb</span>
            </div>
            {auth.currentUser && (
                <div className="buttonExit">
                    <MdOutlineExitToApp
                        size={25}
                        onClick={() => {
                            dispatch({ type: "null", payload: {} });
                            signOut(auth);
                        }}
                    />
                    <span className="tooltip">Sair</span>
                </div>
            )}
        </Container>
    );
}
