import { NavLink } from "react-router-dom";
import styled from 'styled-components/macro'
import '../../theme/theme.css'


const StyledUL = styled.ul`
    display: flex;  
    justify-content: flex-end;
    width: 100%;
    align-items: center;
    margin-right: 1rem;
`

const StyledNavItem = styled.li`
    list-style: none;
    margin-left: 1rem;
`

export const NavItems = () => {
    return (
        <StyledUL>
            <StyledNavItem>
                <NavLink to="/" className="nav-item">Home</NavLink>
            </StyledNavItem>
            <StyledNavItem>
                <NavLink to="/blog" className="nav-item">Blog</NavLink>
            </StyledNavItem>
            <StyledNavItem>
                <NavLink to="/contact" className="nav-item">Contact</NavLink>
            </StyledNavItem>
        </StyledUL>
    )
}