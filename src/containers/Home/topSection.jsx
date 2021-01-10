import React from 'react';
import styled from 'styled-components';
import heroBg from '../../assets/hero-bg.jpg';
import { Logo } from '../../components/Logo';
import { Margin } from '../../components/Margin';

export const TopSection = () => {
    return (
        <TopContainer>
            <BackgroundFilter>
                <Margin direction="vertical" margin="8em" />

                <Logo />

                <Margin direction="vertical" margin="2em" />

                <HeroText>
                    Software Development <br />
                    From the best in the industry
                </HeroText>
                
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
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeroText = styled.h1`
    font-size: 43px;
    font-weight: 500;
    color: #fff;
    line-height: 50px;
    text-align: center;
`;
