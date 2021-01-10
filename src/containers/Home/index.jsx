import React from 'react';
import styled from 'styled-components';
import { Hero } from './Hero';
import { ServicesSection } from './ServicesSection';

export const Home = () => {
    return (
        <PageContainer>
            <Hero />
            <ServicesSection />
        </PageContainer>
    );
};


const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;