import styled, { css } from "styled-components";

export const List = styled.ul`
    min-height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    margin-top: 3px;
    padding: 20px;
`;

export const Item = styled.li`
    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.off-white};
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
        background-color: ${({ theme }) => theme.colors.green.dark};

        &:hover {
            background-color: ${({ theme }) => theme.colors.green.medium};
            transition: background-color 1s;
        }
        &:active {
            background-color: ${({ theme }) => theme.colors.green.light};
        }
    `}

    ${({ $remove }) => $remove && css`
        background-color: ${({ theme }) => theme.colors.red.dark};

        &:hover {
            background-color: ${({ theme }) => theme.colors.red.medium};
            transition: background-color 1s;
        }
        &:active {
            background-color: ${({ theme }) => theme.colors.red.light};
        }
    `}
`;