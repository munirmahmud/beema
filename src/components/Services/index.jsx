import React from 'react';
import styled from 'styled-components';


export const Service = (props) => {
    const {title, description, imgUrl} = props;

    return (
        <ServiceWrapper>
            <DescriptionWrapper>
                <Title>{title}</Title>
                <Details>{description}</Details>
            </DescriptionWrapper>
            <ServiceImg src={imgUrl} alt={title} />
        </ServiceWrapper>
    )
};

const ServiceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 60%;
`;

const Title = styled.h2`
    color: #262626;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 35px;
`;

const Details = styled.p`
    color: #7A7A7A;
    font-size: 30px;
    font-weight: 400;
`;

const ServiceImg = styled.img`
    max-width: 400px;
    max-height: auto;
`;