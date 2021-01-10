import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

export const Button = (props) => {
    return (
        <ButtonWrapper {...props}>
            {props.children}
        </ButtonWrapper>
    )
};

const ButtonWrapper = styled.button`
    padding: ${({small}) => small ? '3px 12px' : '8px 18px'};;
    border-radius: 5px;
    background-color: ${theme.primary};
    color: ${theme.white};
    font-weight: 700;
    font-size: ${({small}) => small ? '14px' : '20px'};
    line-height: 26px;
    outline: none;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s linear;

    &:hover {
        background-color: transparent;
        border: 2px solid ${theme.primary};
    }
`;