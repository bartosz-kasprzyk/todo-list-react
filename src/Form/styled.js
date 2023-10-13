import styled from "styled-components";

export const FormSection = styled.form`
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 115px;
    grid-auto-flow: column;
    grid-gap: 10px;
    padding: 20px;
    margin-top: 3px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-template-rows: 40px 40px;
    }
`;

export const NewTask = styled.input`
    flex-grow: 1;
    margin-right: 10px;
    padding: 10px;
    border: 2px solid #ececec;

    @media (max-width: 767px) {
        margin-right: 0;
    }

    &::placeholder {
        color: #bdbdbd;
    }
`;

export const Button = styled.button`
    font-family: 'Lato', sans-serif;
    background-color: #008080;
    color: #eee;
    border: none;
    transition: background-color 1s, transform 1s;
    cursor: pointer;

    @media (max-width: 767px) {
        flex-grow: 1;
    }

    &:hover {
        background-color: #038b8b;
        transform: scale(1.1);

    &:active {
        background-color: #06a1a1;
    }
}
`