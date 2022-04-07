import { NavLink } from "react-router-dom";
import styled from 'styled-components/macro'
import '../../theme/theme.css'


const StyledUL = styled.ul`
    display: flex;  
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    @media (min-width: 50rem) {
    flex-direction: row;
    color: var(--bone);
  }
`

const StyledNavItem = styled.li`
    list-style: none;
    padding: 0 0.5rem;
`

export const NavItems = () => {
    return (
        <StyledUL>
            <StyledNavItem>
                <NavLink to="/" className="anchor">Home</NavLink>
            </StyledNavItem>
            <StyledNavItem>
                <NavLink to="/blog" className="anchor">Blog</NavLink>
            </StyledNavItem>
            <StyledNavItem>
                <NavLink to="/contact" className="anchor">Contact</NavLink>
            </StyledNavItem>
        </StyledUL>
    )
}