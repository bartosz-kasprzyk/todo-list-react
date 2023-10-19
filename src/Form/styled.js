import styled from "styled-components";

export const FormSection = styled.form`
    background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
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
    border: 2px solid ${({theme}) => theme.colors.backgroundColor};

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        margin-right: 0;
    }

    &::placeholder {
        color: ${({theme}) => theme.colors.disabledColor};
    }
`;

export const Button = styled.button`
    font-family: 'Lato', sans-serif;
    background-color: ${({theme}) => theme.colors.primaryColor.dark};
    color: ${({theme}) => theme.colors.sectionBackgroundColor};
    border: none;
    transition: background-color 1s, transform 1s;
    cursor: pointer;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        flex-grow: 1;
    }

    &:hover {
        background-color: ${({theme}) => theme.colors.primaryColor.medium};
        transform: scale(1.1);

    &:active {
        background-color: ${({theme}) => theme.colors.primaryColor.light};
    }
}
`