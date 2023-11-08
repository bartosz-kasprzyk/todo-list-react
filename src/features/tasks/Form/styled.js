import styled from "styled-components";

export const FormSection = styled.form`
    background-color: ${({theme}) => theme.colors.white};
    display: grid;
    grid-template-columns: 1fr 115px;
    grid-auto-flow: column;
    grid-gap: 10px;
    padding: 20px;
    margin-top: 3px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        grid-template-rows: 40px 40px;
    }
`;

export const NewTask = styled.input`
    flex-grow: 1;
    margin-right: 10px;
    padding: 10px;
    border: 2px solid ${({theme}) => theme.colors.offwhite};

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        margin-right: 0;
    }

    &::placeholder {
        color: ${({theme}) => theme.colors.gray};
    }
`;

export const Button = styled.button`
    font-family: 'Lato', sans-serif;
    background-color: ${({theme}) => theme.colors.primaryColor};
    color: ${({theme}) => theme.colors.white};
    border: none;
    transition: background-color 1s, transform 1s;
    cursor: pointer;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
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