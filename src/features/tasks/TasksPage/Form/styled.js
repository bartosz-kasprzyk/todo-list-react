import styled from "styled-components";

export const FormSection = styled.form`
    display: grid;
    grid-template-columns: 1fr 115px;
    grid-auto-flow: column;
    grid-gap: 10px;
 
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        grid-template-rows: 40px 40px;
    }
`;

export const Button = styled.button`
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    transition: background-color 1s, transform 1s;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-grow: 1;
    }

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);

    &:active {
        filter: brightness(120%);
    }
}
`