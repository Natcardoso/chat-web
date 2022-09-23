import React, { useState } from "react";
import {
    Container,
    FilterChatList,
    HeaderChatList,
    ContainerChatList,
    ContainerContactList,
} from "./styles";

import ChatPerson from "../../components/ChatPerson";
import ChatList from "../../components/ChatList";
import { Sidebar } from "../../components/Sidebar";

import { MdSearch } from "react-icons/md";
import { ChatInitial } from "../../components/ChatInitial";
import { Login } from "../Login";
import { auth } from "../../Api";

export type ContactProps = {
    id: number;
    name: string;
    avatar: string;
};

type UserProps = {
    id: number;
    name: string;
    avatar: string;
};

export type FaceProps = {
    uid: number;
    displayName: string;
    photoURL: string;
};

export default function Chatweb() {
    const [listContact, setListContact] = useState<ContactProps[]>([
        {
            id: 1,
            avatar: "",
            name: "Natalia",
        },
    ]);
    const [activeChat, setActiveChat] = useState<ContactProps>();
    const [user, setUser] = useState<UserProps | null>(null);

    const handleLoginData = async (user: FaceProps) => {
        let newUser = {
            id: user.uid,
            name: user.displayName,
            avatar: user.photoURL,
        };

        setUser(newUser);
    };

    if (!auth.currentUser) {
        return <Login />;
    }

    return (
        <Container>
            <Sidebar />

            <ContainerChatList>
                <HeaderChatList>
                    <div>
                        <img src={user?.avatar} />
                        <span>{user?.name}</span>
                    </div>
                    <FilterChatList>
                        <MdSearch size={20} />
                        <input
                            type="text"
                            placeholder="Pesquisar ou começar uma nova conversa"
                        />
                    </FilterChatList>
                </HeaderChatList>
                <ContainerContactList>
                    {listContact.map((data, key) => {
                        return (
                            <>
                                <ChatList
                                    key={key}
                                    active={
                                        activeChat?.id === listContact[key].id
                                    }
                                    data={data}
                                    onClick={() =>
                                        setActiveChat(listContact[key])
                                    }
                                />
                            </>
                        );
                    })}
                </ContainerContactList>
            </ContainerChatList>

            {activeChat?.id === undefined ? (
                <ChatInitial />
            ) : (
                <ChatPerson data={activeChat} user={user} />
            )}
        </Container>
    );
}
