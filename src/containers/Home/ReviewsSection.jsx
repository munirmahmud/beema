import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import img1 from '../../assets/profiles/1.jpg';
import img2 from '../../assets/profiles/2.jpg';
import img3 from '../../assets/profiles/3.jpeg';
import { ReviewsCard } from '../../components/ReviewsCard';
import { Title } from '../../components/Title';

export const ReviewsSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767.98px)"
    });

    const isTablet = useMediaQuery({
        query: "(max-width: 991.98px)"
    });

    return (
        <ReviewsContainer>
            <Title>What others are saying <br />about us</Title>

            <StyledCarouselProvider 
                naturalSlideWidth={isMobile ? 100 : 200} 
                naturalSlideHeight={isMobile ? 120 : 185} 
                totalSlides={4} 
                visibleSlides={ isMobile ? 1 : isTablet ? 1 :2}>
                <Slider>
                    <StyledSlide index={0}>
                        <ReviewsCard text=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us." name="John coner" imgUrl={img1} />
                    </StyledSlide>
                    <StyledSlide index={1}>
                        <ReviewsCard text=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us." name="Megan borguer" imgUrl={img2} />
                    </StyledSlide>
                    <StyledSlide index={2}>
                        <ReviewsCard text=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us." name="John coner" imgUrl={img3} />
                    </StyledSlide>
                    <StyledSlide index={3}>
                        <ReviewsCard text=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us." name="Megan borguer" imgUrl={img2} />
                    </StyledSlide>
                </Slider>
                <StyledDotGroup />
            </StyledCarouselProvider>
        </ReviewsContainer>
    )
};

const ReviewsContainer = styled(Element)`
    min-height: 500px;
    width: 1366px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 1380px) {
        width: 100%;
    }
    @media screen and (max-width: 767.98px) {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }
`;

const StyledCarouselProvider = styled(CarouselProvider)`
    width: 100%;
    margin-top: 8em;
    padding: 0 4em;

    @media screen and (max-width: 767.98px) {
        margin-top: 2em;
        padding: 0;
    }
`;

const StyledSlide = styled(Slide)`
    .carousel__inner-slide {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const StyledDotGroup = styled(DotGroup)`
    button {
        background: #E4E4E4;
        width: 10px;
        height:  10px;
        border-radius: 50%;
        outline: none;
        border: none;

        &:not(:last-of-type) {
            margin-right: 6px;
        }
        
        &.carousel__dot--selected {
            background-color: #C4C4C4;
        }
    }
`;
