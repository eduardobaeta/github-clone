import React from 'react';
import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData
                        username={'eduardobrumassio'}
                        name={'Eduardo Brumassio'}
                        avatarUrl={'https://media-exp1.licdn.com/dms/image/C4D03AQEetF4xXW18zg/profile-displayphoto-shrink_100_100/0/1600270160169?e=1656547200&v=beta&t=rDz_tsKYiVpWGHzE4TeUTrijyzlgNYIZvdXX_mJdPuM'}
                        followers={900}
                        following={7}
                        company={'Aspect'}
                        location={'Paraná, Brazil'}
                        email={'eduardobrumassio@hotmail.com'}
                        blog=""
                    />
                </LeftSide>
                <RightSide></RightSide>
            </Main>
        </Container>
    );
}

export default Profile;