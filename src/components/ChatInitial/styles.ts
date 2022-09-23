import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .msgInitialChat {
        color: var(--colorFont);
        font-size: 30px;
        font-weight: 700;
        position: absolute;
        bottom: 5rem;
        width: 100%;
        text-align: center;
    }
`;
