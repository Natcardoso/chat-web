import { Container } from "./styles";
import { BsChatDots } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

export function Sidebar() {
    return (
        <Container>
            <div>
                <BsChatDots size={40} />
                <span>web</span>
            </div>
            {auth.currentUser && (
                <div className="buttonExit">
                    <MdOutlineExitToApp
                        size={25}
                        onClick={() => signOut(auth)}
                    />
                    <span className="tooltip">Sair</span>
                </div>
            )}
        </Container>
    );
}
