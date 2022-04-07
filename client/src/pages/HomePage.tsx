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
    width: 100%;
    @media (min-width: 50rem) {
        width: 70%;
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
            <MainDiv>
                <h1> Home Page</h1 >
            </MainDiv>
            <Aside>
                <Github />
            </Aside>
        </Container>
    )
}

export default HomePage;