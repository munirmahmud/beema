import React from 'react';
import styled, { css } from 'styled-components';
import logo from '../../assets/logo.png';
import { theme } from '../../theme';

export const Logo = (props) => {
    const { inline, small } = props;
    
    return (
        <LogoContainer inline={inline}>
            <LogoImg inline={inline} small={small} src={logo} alt="Beema" />
            <LogoText inline={inline} small={small}>Beema</LogoText>
        </LogoContainer>
    )
};

const LogoContainer = styled.div`
    display: flex;
    flex-direction: ${({inline}) => inline ? 'row' : 'column'};
    align-items: center;
`;

const LogoImg = styled.img`
    width: 8em;
    height: 8em;

    ${({inline}) => inline && css`width: 30px; height: 30px;margin-right: .6em`};
    ${({small}) => small && css`width: 90px; height: auto;`};
`;

const LogoText = styled.h1`
    font-size: ${({inline, small}) => inline ? "20px" : small ? "35px" : '52px'};
    color:  ${({inline}) => inline ? theme.white : theme.primary};
    font-weight: ${({inline}) => inline ? '700' : '900'};
    line-height: 61px;
`;