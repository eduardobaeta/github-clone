import React from 'react';
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>

                <LeftSide>
                    <ProfileData
                        username={'eduardobrumassio'}
                        name={'Eduardo Brumassio'}
                        avatarUrl={'https://avatars.githubusercontent.com/u/60549284?v=4'}
                        followers={900}
                        following={7}
                        company={'Aspect'}
                        location={'Paraná, Brazil'}
                        email={'eduardobrumassio@hotmail.com'}
                        blog=""
                    />
                </LeftSide>

                <RightSide>
                    <Repos>
                        <h2>Random repos</h2>
                        <div>
                            {[1, 2, 3, 4, 5, 6].map(n => (
                                <RepoCard
                                    key={n}
                                    username={'eduardobrumassio'}
                                    reponame={'youtube-content'}
                                    description={'Contains all of my youtube lessons code'}
                                    language={'Javascript'}
                                    stars={8}
                                    forks={4}
                                />
                            ))}
                        </div>
                    </Repos>
                    <CalendarHeading>
                        Randon calendar (Do not represent actual data)
                    </CalendarHeading>
                    <RandomCalendar />
                </RightSide>
            </Main>
        </Container>
    );
}

export default Profile;