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
import { AuthContext } from "../../Context/authContext";
import ChatWindown from "../../components/ChatWindown";
import { ContactList } from "../../components/ContactList";
import { BsFillChatDotsFill } from "react-icons/bs";
import { NewChat } from "../../components/NewChat";
import { Loading } from "../../components/Loading";

type Props = {
    loading: boolean;
};

export default function Chatweb({ loading }: Props) {
    const [contactUserName, setContactUserName] = useState("");
    const [openNewChat, setOpenNewChat] = useState<boolean>(false);
    const { currentUser } = useContext(AuthContext);

    return (
        <Container>
            {loading ? (
                <Loading />
            ) : (
                <ContainerContent>
                    <Sidebar />
                    <ContainerChatList>
                        {openNewChat && (
                            <NewChat setOpenNewChat={setOpenNewChat} />
                        )}
                        <HeaderChatList>
                            <HeaderProfile>
                                <div>
                                    <img src={currentUser?.photoURL} alt="" />
                                    <span>{currentUser?.displayName}</span>
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
                                    onChange={(
                                        e: FormEvent<HTMLInputElement>
                                    ) =>
                                        setContactUserName(
                                            e.currentTarget.value
                                        )
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
            )}
        </Container>
    );
}
