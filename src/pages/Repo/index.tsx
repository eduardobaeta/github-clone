import React from 'react';
import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, LinkButton, ForkIcon, GithubIcon } from './styles';
import { Link } from 'react-router-dom';

const Repo: React.FC = () => {
    return (
        <Container>
            <Breadcrumb>
                <RepoIcon />
                <Link className={'username'} to={'/eduardobrumassio'}>
                    eduardobrumassio
                </Link>

                <span>/</span>

                <Link className={'reponame'} to={'/eduardobrumassio/youtube-content'}>
                    youtube-content
                </Link>
            </Breadcrumb>
            <p>Contains all of my youtube lessons code</p>
            <Stats>
                <li>
                    <StarIcon />
                    <b>9</b>
                    <span>stars</span>
                </li>
                <li>
                    <ForkIcon />
                    <b>4</b>
                    <span>forks</span>
                </li>
            </Stats>

            <LinkButton href={'https://github.com/eduardobaeta/github-clone'}>
                <GithubIcon />
                <span>View on Github</span>
            </LinkButton>
        </Container>
    );
}

export default Repo;