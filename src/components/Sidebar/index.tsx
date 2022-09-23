import { Container } from "./styles";
import { BsChatDots } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";
import { auth } from "../../Api";
import { signOut } from "firebase/auth";

export function Sidebar() {
    return (
        <Container>
            <div>
                <BsChatDots size={40} />
                <span>web</span>
            </div>
            <div>
                <button onClick={() => signOut(auth)}>
                    <MdOutlineExitToApp size={25} />
                </button>
            </div>
        </Container>
    );
}
