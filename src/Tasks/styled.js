import styled, { css } from "styled-components";

export const List = styled.ul`
    min-height: 50px;
    background-color: #fff;
    margin-top: 3px;
    padding: 20px;
`;

export const Item = styled.li`
    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 10px;
    border-bottom: 2px solid #ececec;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;

    ${({ done }) => done && css`
    text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    height: 31px;
    width: 31px;
    border: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:active {
        outline: auto;
        outline-color: #000;
    }

    ${({ toggleDone }) => toggleDone && css`
        background-color: #048004;

        &:hover {
            background-color: #0b9b0b;
            transition: background-color 1s;
        }
        &:active {
            background-color: #0da50d;
        }
    `}

    ${({ remove }) => remove && css`
        background-color: #ec1f30;

        &:hover {
            background-color: #f84150;
            transition: background-color 1s;
        }
        &:active {
            background-color: #ff4f5d;
        }
    `}
`;