import { Container } from "./styles";
import { ReactComponent as ImageInitialChat } from "./conect.svg";

export function ChatInitial() {
    return (
        <Container>
            <ImageInitialChat className="imgInitial" />
            <span className="msgInitialChat">
                Conecte-se enviando mensagens para seus amigos!
            </span>
        </Container>
    );
}
