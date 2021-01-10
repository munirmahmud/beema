import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import bugFixing from '../../assets/illustrations/bug_fixing.png';
import phone from '../../assets/illustrations/mobile_phone.png';
import webDev from '../../assets/illustrations/web_development.png';
import { Margin } from '../../components/Margin';
import { Service } from '../../components/Services';
import { Title } from '../../components/Title';


export const ServicesSection = (props) => {
    return (
        <ServiceContainer name="services">
            <Title>Best Quality Software</Title>
            <Margin direction="vertical" margin="9em" />

            <Service title="Fully integrated services" description="We build and deliver fully integrated webapps with customized control panels that fit your compnay needs" imgUrl={webDev} />
            <Service title="Mobile optimized" imgUrl={phone} />
            <Service title="Quality is our priority" description="We have teams of professional developers, designers and managers that ensures delivering the best software quality for your company" imgUrl={bugFixing} />
        </ServiceContainer>
    )
};

const ServiceContainer = styled(Element)`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em 0;
`;