import React from 'react';
import styled from 'styled-components';
import { Footer } from '../../components/Footer';
import { Margin } from '../../components/Margin';
import { AboutSection } from './AboutSection';
import { HeroSection } from './HeroSection';
import { ReviewsSection } from './ReviewsSection';
import { ServicesSection } from './ServicesSection';

export const Home = () => {
    return (
        <PageContainer>
            <HeroSection />
            <ServicesSection />
            <Margin direction="vertical" margin="5em" />
            <ReviewsSection />
            <AboutSection />
            <Margin direction="vertical" margin="5.6em" />
            <Footer />
        </PageContainer>
    );
};


const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;