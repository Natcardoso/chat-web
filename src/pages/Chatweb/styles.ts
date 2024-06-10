import styled from "styled-components";

export const Container = styled.div`
    background: #186a5e;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const ContainerContent = styled.div`
    display: flex;
    background-color: #ffffff00;
    width: 90%;
    height: 90%;
`;

export const ContainerChatList = styled.div`
    width: 35rem;
    background: #fff;
    position: relative;
`;

export const HeaderChatList = styled.div`
    padding: 2rem;
    padding-bottom: 0;
`;

export const HeaderProfile = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid var(--gray);

    div {
        margin-bottom: 2rem;
        display: flex;
        align-items: center;

        img {
            border-radius: 50px;
            width: 80px;
            height: 80px;
            margin-right: 1rem;
            object-fit: cover;
        }

        span {
            font-size: 20px;
            font-weight: 700;
        }

        svg {
            cursor: pointer;
            color: var(--colorIcons);
        }
    }
`;

export const FilterChatList = styled.div`
    margin: 2rem 0;
    display: flex;
    align-items: center;
    border-radius: 20px;
    background: var(--gray);
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
        background-color: transparent;
    }

    input::-webkit-input-placeholder {
        color: var(--colorFont);
    }
`;

export const ContainerContactList = styled.div`
    height: 67%;
    padding: 0 2rem;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 12px;
        background: var(--gray);
    }

    ::-webkit-scrollbar-track {
        background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #80808075;
        border-radius: 20px;
        border: 3px solid var(--gray);
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;
