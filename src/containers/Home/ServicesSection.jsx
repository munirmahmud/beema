import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Title } from '../../components/Title';

export const ServicesSection = (props) => {
    return (
        <ServiceContainer name="services">
            <Title>Best Quality Software</Title>
        </ServiceContainer>
    )
};

const ServiceContainer = styled(Element)`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
`;
