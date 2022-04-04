import MainLogo from '../../assets/images/dm_logo.png'
import styled from 'styled-components/macro'

const StyledLogo = styled.img`
    width: 200px;
`

export const Logo = () => {
    return (
        <StyledLogo src={MainLogo} />
    )
}