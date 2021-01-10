import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { theme } from '../../theme';

export const Logo = () => {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt="Beema" />
            <LogoText>Beema</LogoText>
        </LogoContainer>
    )
};

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LogoImg = styled.img`
    width: 8em;
    height: 8em;
`;

const LogoText = styled.span`
    font-size: 52px;
    color: ${theme.primary};
    margin-top: 6px;
    font-weight: 900;
    line-height: 61px;
`;