import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
`;

export const Header = styled.div`
    border-bottom: 2px solid var(--gray);
    display: flex;
    align-items: center;
    padding: 2.1rem 0;

    svg {
        cursor: pointer;
        color: var(--colorIcons);
        position: absolute;
        transition: all 0.2s linear;

        :hover {
            margin-left: -0.5rem;
        }
    }

    span {
        margin-left: 3rem;
        font-size: 18px;
        font-weight: 600;
    }
`;

export const ContainerContact = styled.div`
    padding-top: 2rem;
    height: 85%;

    .chat {
        display: flex;
        border-radius: 20px;
        align-items: center;
        padding: 0.5rem 1rem;
        margin-bottom: 0.5rem;
        cursor: pointer;

        :hover {
            background: var(--gray);
        }

        svg,
        img {
            width: 70px;
            height: 70px;
            border-radius: 40px;
            margin-right: 0.5rem;
            color: var(--colorIcons);
            object-fit: cover;
        }

        div {
            display: flex;
            flex-direction: column;

            .name {
                display: flex;
                flex-direction: row;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 0.3rem;
            }

            span:nth-child(1) {
                font-weight: 700;
                font-size: 19px;
            }
        }
    }
`;
