import { NavItems } from './NavItems'
import { Logo } from './Logo'
import styled from 'styled-components/macro'
import '../../theme/theme.css'

const StyledNav = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--purple);
    align-items: center;
    justify-content: space-between;
    @media (min-width: 50rem) {
    flex-direction: row;
  }
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