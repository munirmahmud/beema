import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const IconContainer = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: rgba(113, 113, 113, 0.48);
    border: 2px solid #797979;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition all 0.3s ease-in-out;

    &:hover {
        border: 2px solid ${theme.primary}
    }
`;

const ArrowIcon = styled.div`
    color: ${theme.white};
    font-size: 30px;
`;

export const DownArrow = () => {
    return (
        <IconContainer>
            <ArrowIcon>
                <FontAwesomeIcon icon={faAngleDown} />
            </ArrowIcon>
        </IconContainer>
    )
}
