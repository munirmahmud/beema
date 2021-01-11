import React from 'react';
import styled from 'styled-components';
import { Margin } from '../../components/Margin';
import { Hero } from './Hero';
import { Reviews } from './Reviews';
import { ServicesSection } from './ServicesSection';

export const Home = () => {
    return (
        <PageContainer>
            <Hero />
            <ServicesSection />
            <Margin direction="vertical" margin="5em" />
            <Reviews />
        </PageContainer>
    );
};


const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;