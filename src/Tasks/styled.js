import styled, { css } from "styled-components";

export const List = styled.ul`
    min-height: 50px;
    background-color: ${({ theme }) => theme.colors.sectionBackgroundColor};
    margin-top: 3px;
    padding: 20px;
`;

export const Item = styled.li`
    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.backgroundColor};
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
    color: ${({ theme }) => theme.colors.sectionBackgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:active {
        outline: auto;
        outline-color: ${({ theme }) => theme.colors.borderColor};
    }

    ${({ $toggleDone }) => $toggleDone && css`
        background-color: ${({ theme }) => theme.colors.checkColor.dark};

        &:hover {
            background-color: ${({ theme }) => theme.colors.checkColor.medium};
            transition: background-color 1s;
        }
        &:active {
            background-color: ${({ theme }) => theme.colors.checkColor.light};
        }
    `}

    ${({ $remove }) => $remove && css`
        background-color: ${({ theme }) => theme.colors.removeColor.dark};

        &:hover {
            background-color: ${({ theme }) => theme.colors.removeColor.medium};
            transition: background-color 1s;
        }
        &:active {
            background-color: ${({ theme }) => theme.colors.removeColor.light};
        }
    `}
`;