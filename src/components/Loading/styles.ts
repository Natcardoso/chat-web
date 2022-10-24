import styled, { keyframes } from "styled-components";

const Loading = keyframes`
    0% { transform: rotate(0deg) }
    100%{ transform: rotate(360deg) }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    svg {
        animation: ${Loading} 0.8s infinite linear;
    }
`;
