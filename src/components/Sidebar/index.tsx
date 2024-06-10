import { Container } from "./styles";
import { BsChatDots } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { ChatContext } from "../../Context/chatContext";
import { AuthContext } from "../../Context/authContext";

export function Sidebar() {
    const { dispatch } = useContext(ChatContext);
    const { setUserActive } = useContext(AuthContext);

    const handleClick = () => {
        setUserActive("");
        dispatch({ type: "logout", payload: {} });
        signOut(auth);
    };

    return (
        <Container>
            <div>
                <BsChatDots size={40} />
                <span>ChatWeb</span>
            </div>
            <div className="buttonExit">
                <MdOutlineExitToApp size={25} onClick={handleClick} />
                <span className="tooltip">Sair</span>
            </div>
        </Container>
    );
}
