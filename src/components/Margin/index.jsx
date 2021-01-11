import React from 'react';
import styled from 'styled-components';

const MarginHorizontal = styled.span`
    display: flex;
    width: ${({ margin }) => typeof margin === 'string' ? margin: `${margin}px`};
`;

const MarginVertical = styled.span`
    display: flex;
    height: ${({margin}) => typeof margin === 'string' ? margin: `${margin}em`};

    @media screen and (max-width: 767.98px) {
        height: ${({margin}) => typeof margin === 'string' ? margin: `${margin / 2}em`};
    }
`;

const Margin = (props) => {
    const { direction } = props;

    if(direction === 'horizontal') {
        return <MarginHorizontal {...props} />
    } else {
        return <MarginVertical {...props} />
    }
};

Margin.defaultProps = {
    direction: "horizontal",
};

export { Margin };
