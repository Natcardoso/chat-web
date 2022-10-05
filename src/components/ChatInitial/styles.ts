import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    background: #fff;
    border-radius: 0 10px 10px 0;
    border-left: 2px solid var(--gray);

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
