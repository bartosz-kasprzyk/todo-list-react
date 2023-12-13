import { NavSection, StyledNavLink } from "./styled";

export const Navigation = () => (
    <nav>
        <NavSection>
            <li><StyledNavLink to="/zadania">Zadania</StyledNavLink></li>
            <li><StyledNavLink to="/autor">O autorze</StyledNavLink></li>
        </NavSection>
    </nav>
);