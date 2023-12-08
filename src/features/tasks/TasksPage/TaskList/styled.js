import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
    min-height: 50px;
    margin: 0 0 0 -30px;
`;

export const Item = styled.li`
    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.offwhite};
    align-items: center;

    ${({ $hidden }) => $hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;

    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: none;
`;


export const Button = styled.button`
    height: 31px;
    width: 31px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:active {
        outline: auto;
        outline-color: ${({ theme }) => theme.colors.black};
    }

    ${({ $toggleDone }) => $toggleDone && css`
        background-color: ${({ theme }) => theme.colors.green};

        &:hover {
            filter: brightness(110%);
            transition: background-color 1s;
        }
        &:active {
            filter: brightness(120%);
        }
    `}

    ${({ $remove }) => $remove && css`
        background-color: ${({ theme }) => theme.colors.red};

        &:hover {
            filter: brightness(110%);
            transition: background-color 1s;
        }
        &:active {
            filter: brightness(120%);
        }
    `}
`;