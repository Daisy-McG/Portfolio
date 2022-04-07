import React, { Component } from 'react'
import styled from 'styled-components/macro'

import { Github } from '../components/home'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 50rem) {
        flex-direction: row;
    }
`

const MainDiv = styled.div`
    width: 89%;
    @media (min-width: 50rem) {
        width: 70%;
        padding: 0 2rem;
    }
`

const Aside = styled.aside`
    width: 100%;
    @media (min-width: 50rem) {
        width: 30%;
    }
`

const HomePage = () => {
    return (
        <Container>
            <Aside>
                <Github />
            </Aside>
            <MainDiv>
                <h1> Home Page</h1 >
            </MainDiv>
        </Container>
    )
}

export default HomePage;