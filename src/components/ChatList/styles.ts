import styled from "styled-components";

interface ChatProps {
    styleActive: boolean;
}

export const Container = styled.div``;

export const Chat = styled.div<ChatProps>`
    display: flex;
    border-radius: 4px;
    align-items: center;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    background: var(--white);
    cursor: pointer;
    border-left: ${({ styleActive }) =>
        styleActive ? "4px solid var(--green)" : "4px solid var(--gray)"};
    transition: border-left 0.2s ease;

    :hover {
        border-left: 4px solid var(--green);
    }

    svg,
    img {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        margin-right: 0.5rem;
        color: var(--colorIcons);
        object-fit: cover;
    }

    div {
        display: flex;
        flex-direction: column;

        .name_hours {
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

        .hours {
            color: var(--colorFont);
            font-size: 14px;
        }
    }
`;

export const Message = styled.span`
    width: 22rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 17px;
    color: var(--colorFont);
    font-weight: 500;
`;
