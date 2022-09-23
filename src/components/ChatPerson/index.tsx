import {
    AreaMessage,
    Container,
    Footer,
    Header,
    InputMessage,
    MessageLine,
} from "./styles";

import { MdAddCircle, MdEmojiEmotions, MdMic, MdSend } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { ContactProps } from "../../pages/Chatweb";
import { useEffect, useRef, useState } from "react";

import Picker from "emoji-picker-react";

type Props = {
    data: ContactProps;
    user: any;
};

export default function ChatPerson({ data, user }: Props) {
    const [text, setText] = useState<string>("");
    const [openEmoji, setOpenEmoji] = useState<boolean>(false);
    const [listMessage, setListMessage] = useState([
        { author: 0, textMessage: "Olá, tudo bem?" },
        { author: 1, textMessage: "Olaaa" },
        {
            author: 1,
            textMessage: `Você não está no universo, você é o universo, uma parte intrínseca dele. Em última análise, você não é uma pessoa, mas um ponto focal onde o universo está se tornando consciente de si mesmo. Que milagre incrível.`,
        },
    ]);

    const areaMessage = useRef<HTMLDivElement>(document.createElement("div"));

    const onEmojiClick = (event: any, emojiObject: { emoji: string }) => {
        setText(text + emojiObject.emoji);
    };

    useEffect(() => {
        areaMessage.current.scrollTop = areaMessage.current.scrollHeight;
        areaMessage.current.scrollIntoView({ behavior: "smooth" });
    }, [listMessage]);

    return (
        <Container>
            <Header>
                {data.avatar ? (
                    <img src={data.avatar} />
                ) : (
                    <IoPersonCircleSharp />
                )}
                <div>
                    <span>{data.name}</span>
                    <span>online</span>
                </div>
            </Header>
            <AreaMessage ref={areaMessage}>
                {listMessage.map((data, key: any) => {
                    return (
                        <MessageLine
                            style={{
                                justifyContent:
                                    user.id === data.author
                                        ? "flex-end"
                                        : "flex-start",
                            }}
                            key={key}
                        >
                            <div
                                style={{
                                    background:
                                        user.id === data.author
                                            ? "var(--green)"
                                            : "var(--gray)",
                                    color:
                                        user.id === data.author ? "white " : "",
                                }}
                            >
                                <span>{data.textMessage}</span>
                            </div>
                        </MessageLine>
                    );
                })}
            </AreaMessage>
            <Footer>
                {/* <MdAddCircle size={40} /> */}
                {openEmoji && (
                    <Picker
                        onEmojiClick={onEmojiClick}
                        disableAutoFocus={true}
                        native
                    />
                )}
                <MdEmojiEmotions
                    size={40}
                    color={openEmoji ? "var(--green)" : ""}
                    onClick={() => setOpenEmoji(!openEmoji)}
                />

                <InputMessage>
                    <input
                        type="text"
                        placeholder="Digite uma mensagem.."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    {text ? (
                        <MdSend
                            className="iconSend"
                            size={25}
                            onClick={() => {
                                setOpenEmoji(false);
                                setText("");
                            }}
                        />
                    ) : (
                        <MdMic size={40} />
                    )}
                </InputMessage>
            </Footer>
        </Container>
    );
}
