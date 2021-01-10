import React from 'react';
import styled, { css } from 'styled-components';
import logo from '../../assets/logo.png';
import { theme } from '../../theme';

export const Logo = (props) => {
    const { inline } = props;
    
    return (
        <LogoContainer inline={inline}>
            <LogoImg inline={inline} src={logo} alt="Beema" />
            <LogoText inline={inline}>Beema</LogoText>
        </LogoContainer>
    )
};

const LogoContainer = styled.div`
    display: flex;
    flex-direction: ${({inline}) => inline ? 'row' : 'column'};
    align-items: ${({inline}) => inline && 'center'};
`;

const LogoImg = styled.img`
    width: 8em;
    height: 8em;

    ${({inline}) => inline && css`width: 30px; height: 30px;margin-right: .6em`};
`;

const LogoText = styled.h1`
    font-size: ${({inline}) => inline ? '20px' : '52px'};
    color:  ${({inline}) => inline ? theme.white : theme.primary};
    font-weight: ${({inline}) => inline ? '700' : '900'};
    line-height: 61px;
`;