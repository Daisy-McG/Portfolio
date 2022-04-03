import { NavItems } from './NavItems'
import { Logo } from './Logo'
import styled from 'styled-components/macro'
import '../../theme/theme.css'

const StyledNav = styled.div`
    display: flex;
    flex-direction: row;
    background-color: var(--purple);
    align-items: center;
`

const LogoDiv = styled.div`
    justify-content: flex-start;
`

export const Navbar = () => {
    return (
        <StyledNav>
            <LogoDiv>
                <Logo />
            </LogoDiv>
            <NavItems />
        </StyledNav>
    )
}