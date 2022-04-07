import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ExternalLink } from 'react-external-link';
import axios from "axios";

import styled from 'styled-components/macro'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    margin-top: 1.5rem;
    border: 1px solid #1a14235c;
    border-radius: 2px;
    box-shadow: 6px 6px 4px #4e4747;
    padding-bottom: 1rem;
`

const Heading = styled.p`
    margin: 0.5rem 0 0 0;
    font-weight: bold;
    text-align: center;
`

const Hr = styled.hr`
    width: 50%;
`
const Image = styled.img`
    margin-top: 1rem;
    border-radius: 2px;
    width: 30%;
    height: auto;
`

const Follow = styled.span`
    color: var(--purple);
    font-weight: bolder;
    border: 2px solid var(--white);
    padding: 0.25rem;
    border-radius: 5px;
    box-shadow: 2px 2px #888888;
    &:hover {
        color: var(--dim-grey);
    }
    &:active {
        border: none;
    }
`

const queryClient = new QueryClient();

export function Github() {
    return (
        <QueryClientProvider client={queryClient}>
            <Git />
        </QueryClientProvider>
    );
}

const Git = () => {
    const { isLoading, error, data, isFetching } = useQuery<string, Error, any>("repoData", () =>
        axios.get(
            "https://api.github.com/users/Daisy-McG"
        ).then((res) => res.data)
    );

    if (isLoading) return <Container><Heading>"Loading..."</Heading></Container>;

    if (error) return <Container><Heading>An error has occurred: ${error.message}</Heading></Container>;

    return (
        <Container>
            <Image src={data.avatar_url} alt="Image of Daisy McGirr" />
            <h2>{data.name}</h2>
            <Hr />
            <Heading>Bio: </Heading>
            {data.bio}
            <Hr />
            <Heading>Location:</Heading>
            {data.location}
            <Hr />
            <Heading>Public Repos: </Heading>
            {data.public_repos}
            <Hr />
            <ExternalLink href={data.html_url} className='anchor'>
                <Follow>Follow</Follow>
            </ExternalLink>
            <Heading>{isFetching ? "Updating..." : ""}</Heading>
        </Container>
    );
}