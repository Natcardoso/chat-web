import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border-left: 2px solid var(--gray);
`;

export const Header = styled.div`
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--gray);
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
    border-radius: 0 10px 0 0;

    svg,
    img {
        height: 70px;
        width: 70px;
        border-radius: 40px;
        margin-right: 1rem;
        color: var(--colorIcons);
        object-fit: cover;
    }

    div {
        display: flex;
        flex-direction: column;

        span:nth-child(1) {
            font-weight: 700;
            font-size: 18px;
        }

        span:nth-child(2) {
            font-size: 14px;
            color: var(--colorFont);
        }
    }
`;

export const AreaMessage = styled.div`
    height: 100%;
    padding: 1rem 2rem;
    overflow-y: auto;
    background-color: var(--gray);
    border-right: 3px solid #fff;

    ::-webkit-scrollbar {
        width: 12px;
        background: white;
    }

    ::-webkit-scrollbar-track {
        background: white;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #80808075;
        border-radius: 20px;
        border: 3px solid var(--gray);
    }
`;

export const ContainerMessageLine = styled.div`
    margin-bottom: 0.8rem;
    display: flex;
`;

export const MessageLine = styled.div`
    display: flex;
    box-shadow: 0px 0px 10px 0px #8080802e;
    padding: 0.5rem;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    width: max-content;
    max-width: 80%;
    justify-content: space-between;

    .hours {
        margin-left: 1rem;
        font-size: 12px;
        margin-top: 0.5rem;
    }
`;

const AnimationEmojiPicker = keyframes`
    from {
        opacity: 0;
        bottom: 0;
          z-index: -1;
    }

    to{
        opacity: 1;
        z-index:0
    }
`;

export const Footer = styled.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    position: relative;
    background: #fff;
    border-radius: 0 0 10px 0;

    svg {
        color: var(--colorIcons);
        cursor: pointer;
    }

    .emoji-picker-react {
        position: absolute;
        left: 0;
        bottom: 5.5rem;
        width: 100%;
        animation: ${AnimationEmojiPicker} 0.3s ease-in;
    }
`;

const Loading = keyframes`
    0% { transform: rotate(0deg) }
    100%{ transform: rotate(360deg) }
`;

export const InputMessage = styled.div`
    display: flex;
    padding: 0.8rem 2rem;
    background-color: var(--input);
    border-radius: 20px;
    margin: 0 1.5rem;
    width: 100%;

    input {
        font-size: 20px;
        outline: none;
        border: none;
        background: transparent;
        width: 100%;
        color: var(--colorFont);

        ::-webkit-input-placeholder {
            color: var(--colorFont);
        }
    }
`;

export const ButtonSend = styled.div`
    .iconLoading {
        background: var(--green);
        color: white;
        padding: 0.5rem;
        border-radius: 40px;
        animation: ${Loading} 0.9s infinite linear;
    }

    .iconSend {
        background: var(--green);
        color: white;
        padding: 0.5rem;
        border-radius: 40px;
    }
`;
