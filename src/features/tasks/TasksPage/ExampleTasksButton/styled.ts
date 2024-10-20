import styled from "styled-components";

export const Loading = styled.div`
    text-align: center;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray};
    padding: 10px 15px;
`;