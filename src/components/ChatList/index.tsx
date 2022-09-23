import { Chat, Container, Message } from "./styles";

import { IoPersonCircleSharp } from "react-icons/io5";
import { ContactProps } from "../../pages/Chatweb";

type Props = {
    onClick: any;
    active: boolean;
    data: ContactProps;
};

export default function ContactList({ onClick, active, data }: Props) {
    return (
        <Container>
            <Chat onClick={onClick} styleActive={active}>
                {data.avatar ? (
                    <img src={data.avatar}></img>
                ) : (
                    <IoPersonCircleSharp />
                )}
                <div>
                    <div className="name_hours">
                        <span>{data.name}</span>
                        <span className="hours">agora mesmo</span>
                    </div>

                    <Message>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A voluptatum ex facere officia, quam perferendis nam
                        optio, cum vitae error excepturi beatae accusantium
                        repellendus necessitatibus harum nihil! Nisi, deleniti
                        velit!
                    </Message>
                </div>
            </Chat>
        </Container>
    );
}
