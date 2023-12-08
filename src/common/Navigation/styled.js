import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavSection = styled.ul`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    list-style-type: none;
    padding: 10px;
    margin: 0;
    overflow: hidden;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    float: left;
    padding: 5px 20px;
    
    &.active {
        font-weight: 700;
    }
`;
