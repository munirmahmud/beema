import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import img1 from '../../assets/profiles/1.jpg';
import img2 from '../../assets/profiles/2.jpg';
import img3 from '../../assets/profiles/3.jpeg';
import { ReviewsCard } from '../../components/ReviewsCard/';
import { Title } from '../../components/Title';



export const Reviews = () => {
    return (
        <ReviewsContainer>
            <Title>What others are saying <br />about us</Title>

            <StyledCarouselProvider naturalSlideWidth={200} naturalSlideHeight={185} totalSlides={4} visibleSlides={2}>
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
    height: 800px;
    width: 1366px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
    width: 100%;
    margin-top: 8em;
    padding: 0 4em;
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
