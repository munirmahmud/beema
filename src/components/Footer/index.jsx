import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Logo } from '../Logo';
import { Margin } from '../Margin';


export const Footer = () => {
    return (
        <FooterContainer>
            <Margin direction="vertical" margin={5.6} />

            <FooterWrapper>
                <Logo small />

                <Margin direction="vertical" margin="2.5em" />

                <HeroText>
                    Software Development <br />
                    From the best in the industry
                </HeroText>

                <Margin direction="vertical" margin="2.3em" />

                <FooterButton>Start your Project</FooterButton>

                <Margin direction="vertical" margin="5em" />
                <Line />

                <FooterBottomWrapper>
                    <FooterMenuWrapper>
                        <MenuLink href="#">Privacy Policy</MenuLink>
                        <MenuLink href="#">Terms of Service</MenuLink>
                        <MenuLink href="#">Contact</MenuLink>
                    </FooterMenuWrapper>

                    <SocialIconWrapper>
                        <SocialIcon>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </SocialIcon>
                        <SocialIcon>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </SocialIcon>
                        <SocialIcon>
                            <FontAwesomeIcon icon={faTwitter} />
                        </SocialIcon>
                    </SocialIconWrapper>
                </FooterBottomWrapper>

                <CopyRight>&copy; {new Date().getFullYear()} Beema All rights reserved</CopyRight>

            </FooterWrapper>
        </FooterContainer>
    )
};


const FooterContainer = styled.footer`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    background-color: #1f1f1f;
`;

const FooterWrapper = styled.div`
    width: 1366px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1199.98px) {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }
`;

const HeroText = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 42px;
    line-height: 60px;
    letter-spacing: 0.01em;

    @media screen and (max-width: 767.98px) {
        font-size: 28px;
        line-height: 45px;
    }
`;

const FooterButton = styled(Button)`
    width: fit-content;
    align-self: center;
`;

const Line = styled.span`
    width: 100%;
    height: 1px;
    background: #ffffff;
    margin-top: auto;
`;

const FooterBottomWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2em 0;

    @media screen and (max-width: 767.98px) {
        flex-direction: column;
    }
`;

const FooterMenuWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const MenuLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.04em;

    &:not(:last-of-type) {
        margin-right: .8em;
    }

    &:hover {
        color: #adadad;
    }

    @media screen and (max-width: 767.98px) {
        margin-bottom: 1.5em;
    }
`;

const SocialIconWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SocialIcon = styled.div`
    color: #fff;
    font-size: 20px;
    transition: all 0.3s ease-in-out;
    
    &:not(:last-of-type) {
        margin-right: 20px;
    }

    > svg {
        cursor: pointer;
    }
    
    &:hover {
        color: #adadad;
    }
`;

const CopyRight = styled.p`
    text-align: center;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    padding-bottom: 2em;
`;