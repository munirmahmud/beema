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

            <Margin direction="vertical" margin={6} />

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

    @media screen and (max-width: 1199.98px) {
        max-width: 100%;
        margin-top: 5em;
        padding-left: 15px;
        padding-right: 15px;
    }
`;

const AboutContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 767.98px) {
        flex-direction: column-reverse;
        width: 100%;
    }
`;

const AboutText = styled.div`
    font-size: 28px;
    color: #2F2F2F;

    p {
        line-height: 33px;
        margin-bottom: 1em;
    }

    @media screen and (max-width: 1199.98px) {
        font-size: 22px;
    }

    @media screen and (max-width: 767.98px) {
        font-size: 18px;

        p {
            margin-bottom: .6em;
            line-height: 28px;
        }
    }
`;

const AboutImg = styled.img`
    max-width: 796px;
    height: auto;

    @media screen and (max-width: 1199.98px) {
        max-width: 500px;
    }

    @media screen and (max-width: 767.98px) {
        margin-bottom: 2em;
        max-width: 100%;
    }
`;
