import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Container } from "./styles";

export function Loading() {
    return (
        <Container>
            <AiOutlineLoading3Quarters size={30} color={"var(--colorIcons)"} />
        </Container>
    );
}
