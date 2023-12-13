import styled from 'styled-components';
import { SOLID, MEDIA } from "./variables";
import Van from "../assets/imgs/van_cartoon-removebg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const IntroContainer = styled.div`
    margin-bottom: -350px;
    padding: 50px 0px 0px;
    background-color: ${SOLID.WHITE+"99"};
    @media (max-width: ${MEDIA.TABLET}) {
        padding-top: 50px;
    }  
`;

export const BaseContainer2 = styled.div`
    width: 100vw;
    padding: 10px 0px 0px;
    background-color: ${SOLID.OFF_WHITE};
    text-align: center;
    z-index: 2;
`;

export const IntroContainerOverLay = styled.div`
    position: absolute;
    height: 350px;
    width: 100%;
    z-index: 2;
    `;

export const Info = styled.div`
    position: relative;
    display: flex; 
    flex-direction: row;
    margin: 30px auto 0px;
    height: 350px;
    z-index: 3;
    justify-content: center;
    background-color: ${SOLID.BLUE};
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        height: 550px;
        flex-direction: column;
    }
`;

export const InfoAfter = styled.div`
    position: relative;
    margin: 0px auto 280px;
    z-index: 3;
    width: 0px;
   height: 0px;
   border-style: solid;
   border-width: 100px 100vw 0 0;
   border-color: ${SOLID.BLUE} transparent transparent transparent;
   transform: rotate(0deg);
   @media (max-width: ${MEDIA.LARGE_MOBILE}) {
    margin: 0px auto 170px;
}
`;


export const CutePhoto = styled.div`
    background-image: url(${Van});
    margin: auto 20px;
    padding: 0px;
    width: 450px;
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        margin: 20px auto;
    }
    @media (max-width: ${MEDIA.MOBILE}) {
        width: 300px;
    }
`;

export const ImgLogo = styled.img`
    width: 350px;
    z-index: 1;

    @media (max-width: ${MEDIA.MOBILE}) {
        width: 350px;
        height: 150px;
    }
`;

export const InfoContainer = styled.div`
z-index: 3;
margin: auto 20px;
width: 300px;
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        text-align: center;
        margin: 0px auto;
    }
`;

export const Title = styled.h1`
    padding-top: 20px;
    color: ${SOLID.BLUE};
    font-size: 2rem;
    width: 100%;
`;

export const P = styled.p`
    color: ${SOLID.BLACK};
    font-size: 0.7rem;
    padding-top: 10px;

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        position: relative;
        bottom: 25px;
    }
`;

export const Summary = styled.div`
    width: 60%;
    max-width: 600px;
    border-bottom: 5px solid ${SOLID.AQUA_BLUE};
    text-align: center;
    line-height: 1.6;    
    z-index: 4;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 80%;
    }

    @media (max-width: ${MEDIA.MOBILE}) {
        font-size: 0.9rem;
    }
`;

export const BaseContainer = styled.div`
    position: relative;
    bottom: 350px;
    text-align: center;
    z-index: 4;
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        bottom: 250px;
    }
    @media (max-width: ${MEDIA.MOBILE}) {
        bottom: 200px;
    }
    `;

export const Point = styled.div`
    display: flex;
    padding: 10px;
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        width: 90%;
        margin: 0px auto;
        text-align: center !important;
    }
`;

export const PointNumber = styled.div.attrs((props) => props)`
    height: 50px;
    width: 50px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 5px;
    transition: all 0.5s ease;
    margin: 0px auto;
    &:hover {
        transform:scale(1.2);
    } 

`;

export const PointNumberP = styled.p`
    color: white;
    font-size: 25px;
    font-weight: 500;
    padding-top: 8px;
`;

export const Icon = styled.img`
    margin: 0px auto;
    height: 60px;
`;

export const Points = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: 0px auto;
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        margin: 0px auto;
        flex-wrap: wrap;
    }
`;

export const PP = styled.p`
    font-size: 0.8rem;
    margin-bottom: 12px;
    text-align: left;
`;

export const ArticleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0px auto 30px;
    `;

export const AImgContainer = styled.div`
    height: 150px;
    width: 150px;
    overflow: hidden;
    margin: auto;
    `;

export const AImg = styled.img`
    width: 200px;
    `;

export const ACard = styled.div`
    display: flex;
    text-align: left;
    border-top: 2px solid ${SOLID.PASTEL};
    cursor: pointer;
    padding: 20px;
    
    &:hover {
        background-color: white;
    }

    @media (max-width: ${MEDIA.TABLET}) {
        flex-direction: column;
    }
`;
export const CardC = styled.div`
    width: 70%;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 100%
    }
`;

export const H1 = styled.h1`
color: white;
font-size: 2rem;
`;

export const H2 = styled.h2`
color: white;
font-size: 1.4rem;
`;

export const H3 = styled.h3`
color: white;
font-size: 0.9rem;
font-weight: 300;
`;

export const H3Black = styled.h3`
font-size: 0.9rem;

`;

export const H1Black = styled.h1`
font-size: 1.4rem;
`;

export const ServicePoint = styled.div.attrs((props) => props)`
    padding: 10px;
    margin: 5px;
    width: 40%;
    display: flex;
    margin: 20px;
    justify-content: space-evenly;
    background-color: ${(props) => props.backgroundColor};
    border: 1px dashed black;
    border-radius: 20px;
    max-width: 250px;
    z-index: 3;
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        max-width: 450px;
        width: 90%;
    }
`;

export const ServicePointPage = styled.div.attrs((props) => props)`
    padding: 10px;
    margin: 5px;
    width: 150px;
    display: flex;
    justify-content: space-evenly;
    background-color: ${(props) => props.backgroundColor};
    border: 1px dashed black;
    border-radius: 20px;
    max-width: 250px;
    z-index: 3;
    align-items: center;
    &:hover{
        background-color: ${SOLID.PALE_BLUE};
    }
`;

export const ServiceIcon = styled(FontAwesomeIcon)`
    margin: 0px auto;
    height: 60px;
    position: relative;
    right: 35px;
    top: 25%;
    color: ${SOLID.BLUE};
`;

export const ServiceIconPage = styled(FontAwesomeIcon)`
    margin: 0px auto;
    height: 30px;
    color: ${SOLID.BLUE};
`;

export const ServicePoints = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0px 40px;
`;

export const ServicePointsPage = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0px 40px;
    @media (max-width: 1500px) {
        width: 100%;
        margin: 0px 10px;
    }
    @media (max-width: ${MEDIA.SMALL_DESKTOP}) {
        width: 100%;
        flex-wrap: no-wrap;
    }
`;

export const ContentChildTestimonial = styled.div`
    margin: auto;
    max-width: 900px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${MEDIA.SMALL_DESKTOP}) {
      margin: auto;
      min-height: 500px;
    max-width: 700px;
}
@media (max-width: ${MEDIA.TABLET}) {
    max-width: 600px;

}
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        max-width: 500px;
        min-height: 550px;
    }
    @media (max-width: ${MEDIA.MOBILE}) {
        max-width: 300px;
        min-height: 350px;
    }
`;

export const H1Testimonial = styled.h1`
color: white;
font-size: 2rem;
font-family: 'Bradley Hand', cursive;
`;

export const H3Testimonial = styled.h3`
color: white;
font-size: 0.9rem;
font-weight: 300;
`;