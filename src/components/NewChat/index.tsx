import { Container, ContainerContact, Header } from "./styles";
import { IoArrowBackCircle, IoPersonCircleSharp } from "react-icons/io5";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/authContext";
import { Loading } from "../Loading";
import { Navigate } from "react-router-dom";
import { ChatContext } from "../../Context/chatContext";

type Props = {
    setOpenNewChat: React.Dispatch<React.SetStateAction<boolean>>;
};

type DataProps = {
    uid: string;
    displayName: string;
    photoURL: string;
};

export function NewChat({ setOpenNewChat }: Props) {
    const { currentUser } = useContext(AuthContext);
    const [listContact, setListContact] = useState<DataProps[]>([]);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        setLoading(true);
        const getUser = async () => {
            let list: DataProps[] = [];

            try {
                let q = collection(db, "users");
                let results = await getDocs(q);
                results.forEach((result) => {
                    let data = result.data();
                    if (result.id !== currentUser.uid) {
                        list.push({
                            uid: result.id,
                            displayName: data.displayName,
                            photoURL: data.photoURL,
                        });
                    }
                });

                setListContact(list);
            } catch (err) {}
        };
        getUser();
        setLoading(false);
    }, []);

    const handleSelect = async (id: DataProps) => {
        const combinedId =
            currentUser.uid > id.uid
                ? currentUser.uid + id.uid
                : id.uid + currentUser.uid;

        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (!res.exists()) {
                await setDoc(doc(db, "chats", combinedId), { messages: [] });
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: id.uid,
                        displayName: id.displayName,
                        photoURL: id.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });
                await updateDoc(doc(db, "userChats", id.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });
            }
        } catch (err) {
            console.log(err);
        }

        dispatch({ type: "change_user", payload: id });
        setOpenNewChat(false);
    };

    return (
        <Container>
            <Header>
                <IoArrowBackCircle
                    size={35}
                    onClick={() => setOpenNewChat(false)}
                />
                <span>Nova conversa</span>
            </Header>
            <ContainerContact>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {listContact.map((e, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(e)}
                                className="chat"
                            >
                                {e.photoURL ? (
                                    <img src={e.photoURL}></img>
                                ) : (
                                    <IoPersonCircleSharp />
                                )}
                                <div>
                                    <div className="name">
                                        <span>{e.displayName}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </ContainerContact>
        </Container>
    );
}
