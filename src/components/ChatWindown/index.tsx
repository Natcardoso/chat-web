import {
    AreaMessage,
    Container,
    ContainerMessageLine,
    Footer,
    Header,
    InputMessage,
    MessageLine,
} from "./styles";

import { MdEmojiEmotions, MdSend } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useContext, useEffect, useRef, useState } from "react";

import Picker from "emoji-picker-react";
import { ChatContext } from "../../Context/chatContext";
import {
    arrayUnion,
    doc,
    onSnapshot,
    serverTimestamp,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { v4 as uuid } from "uuid";
import { AuthContext } from "../../Context/authContext";
import { ChatInitial } from "../ChatInitial";

type PropsMessages = {
    date: {
        seconds: number;
    };
    id: string;
    senderId: string;
    text: string;
};

export default function ChatWindown() {
    const { data } = useContext(ChatContext);
    const { currentUser } = useContext(AuthContext);
    const [messages, setMessages] = useState<PropsMessages[]>([]);

    const [text, setText] = useState<string>("");
    const areaMessage = useRef<HTMLDivElement>(document.createElement("div"));
    const [openEmoji, setOpenEmoji] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        return () => {
            unSub();
        };
    }, [data.chatId]);

    const onEmojiClick = (event: any, emojiObject: { emoji: string }) => {
        setText(text + emojiObject.emoji);
    };

    // const handleKeyDown = (e: { code: string }) => {
    //     e.code === "Enter" && handleSend();
    // };

    const handleSend = async () => {
        setLoading(true);
        await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
            }),
        });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
                uid: "send",
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
                uid: "received",
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setOpenEmoji(false);
        setText("");
        setLoading(false);
    };

    useEffect(() => {
        areaMessage.current.scrollTop =
            areaMessage.current.scrollHeight - areaMessage.current.offsetHeight;
    }, [messages]);

    return (
        <>
            {data.chatId === "null" ? (
                <ChatInitial />
            ) : (
                <Container>
                    <Header>
                        {data.user?.photoURL ? (
                            <img src={data.user?.photoURL} />
                        ) : (
                            <IoPersonCircleSharp />
                        )}
                        <div>
                            <span>{data.user?.displayName}</span>
                        </div>
                    </Header>
                    <AreaMessage ref={areaMessage}>
                        {messages.map((msg) => {
                            const date = msg.date;
                            let d = new Date(date?.seconds * 1000);
                            let hours = d.getHours();
                            let minutes = d.getMinutes();
                            hours = hours < 10 ? 0 + hours : hours;
                            minutes = minutes < 10 ? 0 + minutes : minutes;

                            return (
                                <ContainerMessageLine
                                    key={msg.id}
                                    style={{
                                        justifyContent:
                                            msg.senderId === currentUser.uid
                                                ? "flex-end"
                                                : "flex-start",
                                    }}
                                >
                                    <MessageLine
                                        style={{
                                            background:
                                                msg.senderId === currentUser.uid
                                                    ? "var(--green)"
                                                    : "var(--white)",
                                            color:
                                                msg.senderId === currentUser.uid
                                                    ? "white "
                                                    : "",
                                        }}
                                    >
                                        <div>{msg.text}</div>
                                        <div className="hours">{`${hours}:${
                                            `${minutes}`.length === 1
                                                ? minutes + "0"
                                                : minutes
                                        }`}</div>
                                    </MessageLine>
                                </ContainerMessageLine>
                            );
                        })}
                    </AreaMessage>
                    <Footer>
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
                                autoFocus
                                onChange={(e) => setText(e.target.value)}
                            />

                            <div>
                                {loading ? (
                                    <AiOutlineLoading3Quarters
                                        className="iconLoading"
                                        size={25}
                                    />
                                ) : (
                                    <MdSend
                                        onClick={() => {
                                            if (text) {
                                                handleSend();
                                            }
                                        }}
                                        className="iconSend"
                                        size={25}
                                    />
                                )}
                            </div>
                        </InputMessage>
                    </Footer>
                </Container>
            )}
        </>
    );
}
