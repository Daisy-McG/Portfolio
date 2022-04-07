import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components/macro'
import '../../theme/theme.css'

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: var(--blue);
    align-items: center;
    justify-content: center;
    min-height: 100px;
    @media (min-width: 50rem) {
    flex-direction: row;
    color: var(--white);
  }
`

const StyledDiv = styled.div`
    width: 100%;
    text-align: center;
    color: var(--white);
    @media (min-width: 50rem) {
        width: 50%;
    }
`

const StyledHeader = styled.h3`
    font-size: var(--f-md);
    font-weight: 500;
    color: var(--white);
`

const StyledSpan = styled.span`
    color: var(--white);
    display: block;
`

type EmailProps = {
    mailto: string,
    label: string
}

const Email = ({ mailto, label }: EmailProps) => {
    return (
        <Link className='anchor'
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            <StyledSpan>{label}</StyledSpan>
        </Link>
    )
}

type GitHubProps = {
    href: string,
    label: string
}


const GitHubInfo = ({ href, label }: GitHubProps) => {
    return (
        <ExternalLink href={href} className='anchor'>
            <FontAwesomeIcon icon={faCodeBranch} />
            <StyledSpan>{label}</StyledSpan>
        </ExternalLink>


    )
}

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledDiv>
                <StyledHeader>Contact</StyledHeader>
                <p className="footer-txt">Email: <Email label='mcgirr.daisy@gmail.com' mailto='mailto:mcgirr.daisy@outlook.com' /></p>
            </StyledDiv>

            <StyledDiv>
                <StyledHeader>GitHub</StyledHeader>
                <p className="footer-txt">
                    <GitHubInfo label='Follow Me' href='https://github.com/Daisy-McG' />
                </p>
            </StyledDiv>
        </StyledFooter >
    )
}