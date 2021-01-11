import React from 'react';
import styled from 'styled-components';


export const Service = (props) => {
    const {title, description, imgUrl, isReverse} = props;

    return (
        <ServiceWrapper isReverse={isReverse}>
            <DescriptionWrapper>
                <Title>{title}</Title>
                {description && <Details>{description}</Details>}
            </DescriptionWrapper>
            <ServiceImg src={imgUrl} alt={title} />
        </ServiceWrapper>
    )
};

const ServiceWrapper = styled.div`
    display: flex;
    flex-direction: ${({isReverse}) => isReverse && 'row-reverse'};
    align-items: center;
    margin-bottom: 8em;

    @media screen and (max-width: 1199.98px) {
        margin-bottom: 5em;
    }

    @media screen and (max-width: 767.98px) {
        flex-direction: column-reverse;
        margin-bottom: 0;

        &:not(:last-of-type) {
            margin-bottom: 5em;
        }
    }
`;

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 60%;

    @media screen and (max-width: 767.98px) {
        max-width: 100%;
    }
`;

const Title = styled.h2`
    color: #262626;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 35px;

    @media screen and (max-width: 767.98px) {
        font-size: 28px;
        margin-bottom: 25px;
    }
`;

const Details = styled.p`
    color: #7A7A7A;
    font-size: 30px;
    font-weight: 400;
    width: 78%;
    align-self: center;

    @media screen and (max-width: 767.98px) {
        width: 100%;
        font-size: 18px;
    }
`;

const ServiceImg = styled.img`
    max-width: 400px;
    height: auto;

    @media screen and (max-width: 767.98px) {
        max-width: 100%;
        margin-bottom: 2.5em;
    }
`;