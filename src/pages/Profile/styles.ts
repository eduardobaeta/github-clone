import styled from 'styled-components';

export const Container = styled.div`
    --horizontal-padding: 16px;
    --vertical-padding: 24px;

    padding: var(--vertical-padding) var(--horizontal-padding);
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    max-width: 1280px;

    @media (min-width: 768) {
        flex-direction: row;
    }
`;

export const LeftSide = styled.div`
    @media (min-width: 768){
        width: 25%;
    }
`;

export const RightSide = styled.div`
    @media (min-width: 768){
        width: 75%;
    }
`;