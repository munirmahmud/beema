import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';


export const ReviewsCard = (props) => {
    const {text, imgUrl, name} = props;
    return (
        <CardContainer>
            <QuoteIcon>
                <FontAwesomeIcon icon={faQuoteLeft} />
            </QuoteIcon>

            <ReviewText>{text}</ReviewText>
            <Line />

            <UserWrapper>
                <UserImg src={imgUrl} alt={name} />
                <UserName>{name}</UserName>
            </UserWrapper>
        </CardContainer>
    )
};

const CardContainer = styled.div`
    width: 456px;
    height: 522px;
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    margin: 5px 2em;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const QuoteIcon = styled.div`
    position: absolute;
    color: #D1D1D1;
    font-size: 45px;
    top: 20px;
    left: 22px;
`;

const ReviewText = styled.p`
    font-size: 20px;
    line-height: 147.2%;
    color: #585858;
    margin-top: 6.5em;
    text-align: left;
`;

const Line = styled.span`
    width: 100%;
    height: 1px;
    background: #CDCDCD;
    margin-top: auto;
    margin-bottom: .8em;
`;

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1em;
    margin-bottom: 1.2em;
`;

const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const UserName = styled.span`
    font-size: 17px;
    line-height: 20px;
    color: #454545;
    margin-left: .5em;
`;


