import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--green);
`;

const animationMsgErro = keyframes``;

export const MsgErroLogin = styled.div`
    border-radius: 20px;
    background: #ffd1d1;
    border-radius: 20px;
    animation: ${animationMsgErro} 0.5s linear;
    padding: 1rem;

    div {
        font-size: 14px;
        color: #a50707;
    }
`;

export const Form = styled.form`
    width: 20%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    padding: 2.5rem;
    background: white;

    span {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    input:not(:last-child) {
        width: 100%;
        border: none;
        margin-top: 1rem;
        padding: 0.5rem;
        font-size: 18px;
        border-bottom: 1px solid var(--green);

        ::-webkit-input-placeholder {
            color: var(--colorFont);
        }
    }

    button {
        margin-top: 3rem;
        padding: 0.8rem;
        border: none;
        border-radius: 10px;
        background-color: var(--green);
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        width: 80%;
        color: white;

        :hover {
            opacity: 0.8;
        }
    }

    p {
        margin-top: 0.8rem;
        color: var(--colorFont);
        text-align: center;
    }

    a {
        text-decoration: none;
        color: var(--green);
    }
`;
