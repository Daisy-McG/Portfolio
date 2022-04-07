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
    color: var(--dim-grey);
    font-weight: bolder;
    border: 2px solid var(--bone);
    padding: 0.25rem;
    border-radius: 5px;
    box-shadow: 2px 2px #888888;
    &:hover {
        color: #c22222;
        padding: 0.35rem;
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
    const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
        axios.get(
            "https://api.github.com/users/Daisy-McG"
        ).then((res) => res.data)
    );

    if (isLoading) return <Container>"Loading..."</Container>;

    if (error) return <Container>An error has occurred: ${error.message}</Container>;

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
            <div>{isFetching ? "Updating..." : ""}</div>
        </Container>
    );
}