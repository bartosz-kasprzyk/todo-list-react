import styled from "styled-components";

export const Segment = styled.section`
    margin-bottom: 10px;
    box-shadow: 0px 0px 5px 2px hsl(0, 0%, 89%);
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    min-height: 40px;
    background-color: ${({theme}) => theme.colors.sectionBackgroundColor};
    display: flex;
    padding: 20px;
    margin: 0;
`;
