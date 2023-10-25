import styled from "styled-components";

export const StyledParagraph = styled.p`
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 300;
    padding-top: 35px;
    padding-bottom: 55px;
    width: 90%;

    @media (min-width: 320px) {
        font-size: 16px;
        padding-bottom: 9.8vh;
    }

    @media (min-width: 375px) {
        font-size: 17px;
        padding-bottom: 7.5vh;
    }

    @media (min-width: 425px) {
        padding-bottom: 9.7vh;
    }

    @media (min-width: 768px) {
        padding-bottom: 9.8vh;
    }

    @media (min-width: 1024px) {
        font-size: 24px;
        padding-bottom: 10.6vh;
    }

    @media (min-width: 1440px) {
        font-size: 25px;
        padding-bottom: 6vh;
    }

    @media (min-width: 1920px) {
        padding-bottom: 3.3vh;
    }
`