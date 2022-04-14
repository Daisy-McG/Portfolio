import { NavLink } from "react-router-dom";
import styled from 'styled-components/macro'
import '../../theme/theme.css'


const UL = styled.ul`
    display: flex;  
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    @media (min-width: 50rem) {
    flex-direction: row;
    color: var(--bone);
  }
`

const NavItem = styled.li`
    list-style: none;
    padding: 0 0.5rem;
`

export const NavItems = () => {
    return (
        <UL>
            <NavItem>
                <NavLink to="/" className="anchor">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/blog" className="anchor">Blog</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/contact" className="anchor">Contact</NavLink>
            </NavItem>
        </UL>
    )
}