import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import imgUrl from '../../assets/illustrations/rocket_launch.png';
import { Margin } from '../../components/Margin';
import { Title } from '../../components/Title';


export const AboutSection = (props) => {    
    return (
        <AboutContainer>
            <Title>More about Beema</Title>

            <Margin direction="vertical" margin="6em" />

            <AboutContentWrapper>
                <AboutText>
                    <p>Beema is about designing, building and deliverying best quality software for your company.</p>
                    <p>We make sure that you get the best software inferstracture and set of applications to ensure the best experience of your clients.</p>
                    <p>So wether you are handling thousands of payment transactions or you’re just starting out, you are in the right place.</p>     
                </AboutText>

                <AboutImg src={imgUrl} alt="More about Beema" />
            </AboutContentWrapper>
        </AboutContainer>
    )
}


const AboutContainer = styled(Element)`
    max-width: 1366px;
    margin: 0 auto;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15em;
`;

const AboutContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AboutText = styled.div`
    font-size: 28px;
    line-height: 33px;
    color: #2F2F2F;

    p {
        margin-bottom: 1em;
    }
`;

const AboutImg = styled.img`
    max-width: 796px;
    height: auto;
`;
