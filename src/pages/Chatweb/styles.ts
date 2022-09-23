import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: #ffffff00;
`;

export const ContainerChatList = styled.div`
    width: 30%;
    background: var(--gray);
`;

export const HeaderChatList = styled.div`
    padding: 2rem;
    padding-bottom: 0;

    div {
        margin-bottom: 2rem;
        display: flex;
        align-items: center;

        img {
            border-radius: 50%;
            width: 15%;
            margin-right: 1rem;
        }

        span {
            font-size: 20px;
            font-weight: 700;
        }
    }
`;

export const FilterChatList = styled.div`
    margin: 1rem 0;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background: var(--white);
    padding: 1rem;

    svg {
        margin-right: 0.5rem;
        color: var(--colorFont);
    }

    input {
        width: 100%;
        font-size: 14px;
        outline: none;
        border: none;
    }

    input::-webkit-input-placeholder {
        color: var(--colorFont);
    }
`;

export const ContainerContactList = styled.div`
    height: 70%;
    padding: 0 2rem;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 12px;
        background: var(--gray);
    }

    ::-webkit-scrollbar-track {
        background: var(--gray);
    }

    ::-webkit-scrollbar-thumb {
        background-color: #80808075;
        border-radius: 20px;
        border: 3px solid var(--gray);
    }
`;
