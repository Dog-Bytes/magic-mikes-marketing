import { SOLID, MEDIA } from "./variables";
import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100vw;
    background-color: ${SOLID.BLUE};
    padding: 50px 0px 20px;
    position: relative;
    bottom: 0px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    z-index: 9;

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
      flex-direction: column;
      bottom: -150px;
  }  
`;

export const FooterContentContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: ${MEDIA.LARGE_MOBILE}) {
    flex-direction: column;
    justify-content: center;
}  
`;

export const FooterLegalContainer = styled.div`
    width: 100vw;
    background-color: ${SOLID.BLUE};
    padding: 20px 20px;
    position: relative;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
      bottom: -150px;
  }  
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px;
  padding-left: 10px;
`;

export const ContentContainer = styled.div`
  width: 35%;
  text-align: center;
  @media (max-width: ${MEDIA.LARGE_MOBILE}) {
    width: 80%;
    margin: 0px auto;
} 
`;

export const ContentContainerFooter = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: white;
  flex-wrap: wrap;
`;

export const TweetContainer = styled.div`
  width: 340px;
  padding-right: 30px;
`;

export const Img = styled.img`
max-width: 300px;
min-width: 200px;
@media (max-width: ${MEDIA.MOBILE}) {
  width: 20px;
}  
`;

export const ImgWaste = styled.img`
height: 300px;
position: relative;
bottom: 40px;
@media (max-width: ${MEDIA.LARGE_MOBILE}) {
  bottom: 10px;
}  
@media (max-width: ${MEDIA.MOBILE}) {
  height: 200px;
}  
`;

export const ImgLogos = styled.img`
margin: 20px;
max-height: 100px;
`;

export const H1 = styled.h1`
color: white;
font-size: 2rem;
`;

export const H3 = styled.h3`
color: white;
font-size: 0.9rem;
font-weight: 700;
`;

export const P = styled.p`
  color: ${SOLID.WHITE};
    font-size: 0.7rem;
    margin: 0px;

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        position: relative;
        bottom: 25px;
    }
`;

export const DetailsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;

export const DetailContainer = styled.div`
  width: 40%;
`;

export const LinkIcon = styled.a`
color: ${SOLID.WHITE};
    font-size: 0.7rem;
    margin: 0px;
    text-decoration: none;
`;