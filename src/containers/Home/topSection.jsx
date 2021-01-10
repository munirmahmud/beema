import React from 'react';
import styled from 'styled-components';
import heroBg from '../../assets/hero-bg.jpg';

export const TopSection = () => {
    return (
        <TopContainer>
            <BackgroundFilter>
                New
            </BackgroundFilter>
        </TopContainer>
    )
};

const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${heroBg});
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(53, 53, 53, 0.88);
`;
