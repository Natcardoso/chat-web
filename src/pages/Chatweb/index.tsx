import React, { FormEvent, useContext, useState } from "react";
import {
    Container,
    FilterChatList,
    HeaderChatList,
    ContainerChatList,
    ContainerContactList,
    ContainerContent,
    HeaderProfile,
} from "./styles";

import { Sidebar } from "../../components/Sidebar";

import { MdSearch } from "react-icons/md";
import { db } from "../../firebaseConfig";
import { AuthContext } from "../../Context/authContext";
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
import ChatWindown from "../../components/ChatWindown";
import { ContactList } from "../../components/ContactList";
import { BsFillChatDotsFill } from "react-icons/bs";
import { NewChat } from "../../components/NewChat";

export type FaceProps = {
    uid: number;
    displayName: string;
    photoURL: string;
};

export default function Chatweb() {
    const [contactUserName, setContactUserName] = useState("");
    const [openNewChat, setOpenNewChat] = useState<boolean>(false);
    const { currentUser } = useContext(AuthContext);

    return (
        <Container>
            <ContainerContent>
                <Sidebar />
                <ContainerChatList>
                    {openNewChat && <NewChat setOpenNewChat={setOpenNewChat} />}
                    <HeaderChatList>
                        <HeaderProfile>
                            <div>
                                <img src={currentUser.photoURL} />
                                <span>{currentUser.displayName}</span>
                            </div>
                            <div>
                                <BsFillChatDotsFill
                                    size={25}
                                    onClick={() => setOpenNewChat(true)}
                                />
                            </div>
                        </HeaderProfile>
                        <FilterChatList>
                            <MdSearch size={20} />
                            <input
                                type="text"
                                placeholder="Pesquisar ou começar uma nova conversa"
                                onChange={(e: FormEvent<HTMLInputElement>) =>
                                    setContactUserName(e.currentTarget.value)
                                }
                                value={contactUserName}
                            />
                        </FilterChatList>
                    </HeaderChatList>
                    <ContainerContactList>
                        <ContactList contactUserName={contactUserName} />
                    </ContainerContactList>
                </ContainerChatList>
                <ChatWindown />
            </ContainerContent>
        </Container>
    );
}
