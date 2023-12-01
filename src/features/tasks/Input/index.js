import styled from "styled-components";

export default styled.input`
    flex-grow: 1;
    margin-right: 10px;
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.offwhite};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-right: 0;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray};
    }
`;