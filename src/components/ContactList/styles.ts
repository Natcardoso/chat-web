import styled from "styled-components";

type PropsStyle = {
    styleActive: boolean;
};

export const Container = styled.div`
    width: 100%;
`;

export const Chat = styled.div<PropsStyle>`
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
`;

export const Message = styled.div`
    font-size: 14px;
    color: var(--colorFont);
    width: 13rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
