import styled from "styled-components";

export const ButtonSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.white};

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        grid-gap: 10px;
        padding-top: 0;
        padding-bottom: 20px;
    }
`

export const Button = styled.button`
    background: none;
    border: none;
    color: ${({theme}) => theme.colors.primaryColor};
    padding: 5px;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
        transition: color 1s;
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({theme}) => theme.colors.gray};
        transition: none;
    }
`