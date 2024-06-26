import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/authContext";
import { db } from "../../firebaseConfig";
import { Container, Chat, Message } from "./styles";
import { IoPersonCircleSharp } from "react-icons/io5";
import { ChatContext } from "../../Context/chatContext";

type Props = {
    contactUserName: string;
};

type dataUser = {
    displayName: string;
    uid: string;
    photoURL: string;
};

export function ContactList({ contactUserName }: Props) {
    const [chats, setChats] = useState<any>([]);
    const { currentUser } = useContext(AuthContext);
    const { dispatch, data } = useContext(ChatContext);
    const [filter, setFilter] = useState<any>([]);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(
                doc(db, "userChats", currentUser?.uid),
                (doc) => {
                    setChats(doc.data());
                }
            );

            return () => {
                unsub();
            };
        };

        currentUser?.uid && getChats();
    }, [currentUser?.uid]);

    const orderChats = Object.entries(chats).sort((a: any, b: any) => {
        if (a[1].date < b[1].date) return a - b;
        return 0;
    });

    // const filter = orderChats.filter((chat: any) =>
    //     chat[1].userInfo?.displayName.includes(contactUserName)
    // );

    const handleSelect = async (u: dataUser) => {
        dispatch({ type: "change_user", payload: u });
    };

    return (
        <Container>
            {orderChats.map((chat: any) => {
                const date = chat[1].date;
                let d = new Date(date?.seconds * 1000);
                let hours = d.getHours();
                let minutes = d.getMinutes();
                hours = hours < 10 ? 0 + hours : hours;
                minutes = minutes < 10 ? 0 + minutes : minutes;

                return (
                    <Chat
                        key={chat[0]}
                        onClick={() => {
                            handleSelect(chat[1].userInfo);
                        }}
                        styleActive={data.chatId === chat[0]}
                    >
                        {chat[1].userInfo.photoURL ? (
                            <img src={chat[1].userInfo?.photoURL} alt="" />
                        ) : (
                            <IoPersonCircleSharp />
                        )}
                        <div className="containerName">
                            <div className="name">
                                <span>{chat[1].userInfo?.displayName}</span>
                            </div>

                            <Message>{chat[1].lastMessage?.text}</Message>
                        </div>
                        <div className="countMessage">
                            {/* <div className="hours">{`${hours}:${
                                `${minutes}`.length === 1
                                    ? minutes + "0"
                                    : minutes
                            }`}</div> */}
                        </div>
                    </Chat>
                );
            })}
        </Container>
    );
}
