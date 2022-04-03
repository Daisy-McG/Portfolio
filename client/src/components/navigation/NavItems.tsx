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
`

export const NavItems = () => {
    return (
        <StyledUL>
            <StyledNavItem>
                <NavLink to="/" className="nav-item">Home</NavLink>
            </StyledNavItem>
        </StyledUL>
    )
}