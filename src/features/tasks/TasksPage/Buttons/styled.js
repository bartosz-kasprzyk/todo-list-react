import styled from "styled-components";

export const ButtonSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        grid-gap: 10px;
        padding-top: 0;
        padding-bottom: 20px;
    }
`