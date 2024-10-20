import styled from "styled-components";

export const Button = styled.button`
    padding: 15px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    color: ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
        transition: color 1s;
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.gray};
        transition: none;
    }
`;