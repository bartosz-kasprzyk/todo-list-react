import styled from "styled-components";

export const ButtonSection = styled.span`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    align-items: center;
    background-color: #fff;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-gap: 10px;
        padding-top: 0;
        padding-bottom: 20px;
    }
`

export const Button = styled.button`
    background: none;
    border: none;
    color: #008080;
    padding: 5px;
    cursor: pointer;

    &:hover {
        color: #09a5a5;
        transition: color 1s;
    }

    &:active {
        color: #0ac2c2;
    }

    &:disabled {
        color: #ccc;
        transition: none;
    }
`