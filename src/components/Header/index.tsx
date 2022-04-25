import React from 'react';
import { Container, GithubLogo, SearchForm } from './styles';

// import { Container } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <GithubLogo />
            <SearchForm>
                <input type="text" placeholder='Enter username ou repo...' />
            </SearchForm>
        </Container>
    );
}

export default Header;