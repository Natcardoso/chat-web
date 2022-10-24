import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem 0.5rem;
    background: var(--green);
    color: white;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px 0 0 10px;

    svg {
        cursor: pointer;
    }

    .buttonExit {
        position: relative;

        .tooltip {
            text-align: center;
            font-size: 16px !important;
            color: #fff;
            position: absolute;
            top: -2rem;
            right: 1rem;
            background: black;
            padding: 2px 8px;
            border-radius: 4px;
            display: none;
            width: max-content;
        }

        .tooltip:after {
            content: " ";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: #000 transparent transparent transparent;
        }
    }

    .buttonExit:hover .tooltip {
        display: block;
    }
`;
