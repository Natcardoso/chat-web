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

    .containerName {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;

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

    .countMessage {
        color: var(--colorFont);
        font-size: 12px;
        align-items: center;
        display: flex;
        flex-direction: column;

        .on {
            content: "";
            color: var(--green);
            width: 0.8rem;
            height: 0.8rem;
            background-color: var(--green);
            border-radius: 50%;
            margin-top: 0.5rem;
        }
    }
`;

export const Message = styled.div`
    font-size: 14px;
    color: var(--colorFont);
    width: 15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
