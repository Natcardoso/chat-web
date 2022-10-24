import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--green);
`;

export const Form = styled.form`
    width: 25%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 2.5rem;
    background: white;

    span {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    input:not(:last-child) {
        width: 100%;
        border: none;
        margin-bottom: 1rem;
        padding: 0.5rem;
        font-size: 18px;
        border-bottom: 1px solid var(--green);
        outline: none;

        ::-webkit-input-placeholder {
            color: var(--colorFont);
        }
    }

    #file {
        display: none;
    }

    label {
        display: flex;
        align-items: center;
        width: 100%;
        height: max-content;
        gap: 10px;
        margin-top: 1rem;
        cursor: pointer;

        svg {
            color: var(--green);
        }

        span {
            margin: 0;
            font-size: 16px;
            width: max-content;
            padding: 0.5rem;
            border-radius: 20px;
            background-color: var(--colorFont);
            text-align: center;
            color: #fff;

            :hover {
                opacity: 0.8;
            }
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
    }

    a {
        text-decoration: none;
        color: var(--green);
    }
`;

export const PhotoAdd = styled.img`
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
`;

export const Logo = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    color: var(--green);

    span {
        font-size: 14px;
        margin: 0;
        margin-left: 0.5rem;
    }
`;
