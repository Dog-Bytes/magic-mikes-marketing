
import styled from 'styled-components';
import { SOLID, MEDIA } from "./variables"


export const BioContainer = styled.div`
width: 100vw;
padding: 50px 0px 0px;
background-color: ${SOLID.WHITE+"99"};
min-height: 100vh;

@media (max-width: ${MEDIA.TABLET}) {
    padding-top: 50px;
}
`;

export const Desktop = styled.div`
    @media (max-width: ${MEDIA.MOBILE}) {
        display: none;
    }
`;

export const Mobile = styled.div`
    display: none;
    margin: 0px auto;
    padding: 30px;
    width: 60%;

    @media (max-width: ${MEDIA.TABLET}) {
        display: block
    }
`;

export const Summary = styled.div`
    width: 55%;
    padding: 20px;
    margin: 0px auto;
    text-align: center;
    position: relative;
    bottom: 250px;
    z-index: 3;
`;

export const Cards = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 20px auto;
    `;

export const CardsEd = styled.div`
    width: 90%;
    margin: 20px auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    `;

export const Media = styled.div`
    padding: 20px;
    margin: auto 0px;
    
    `;

export const CardContent = styled.div`
    width: 90%;
    margin: 0px auto;
`;

export const H1 = styled.h1`
    color: ${SOLID.WHITE};
    font-size: 2rem;
    z-index: 3;
    width: 100%;
`;

export const H2 = styled.h2`
    text-align: center;
    z-index: 0;

    @media (max-width: ${MEDIA.TABLET}) {
        font-size: 1.4rem;
    }
`;

export const Divider = styled.div`
    width: 50%;
    max-width: 300px;
    border-bottom: 5px solid ${SOLID.AQUA_BLUE};
    margin: 0px auto 20px;
    `;


export const ImgContainer = styled.div`
    width: 35%;
    overflow: hidden;
    position: absolute;
    top: 80px;
    height: calc(100% - 80px);
    z-index: 0;

    @media (max-width: ${MEDIA.TABLET}) {
        /* margin-left: -100px; */
        display: none;
    }

`;

export const Img = styled.img`
    height: 100vh;
    margin-left: -100px;
    z-index: 0;

    /* @media (max-width: ${MEDIA.MOBILE}) {
        margin-left: -100px;
    } */
`;

export const BaseContainerA = styled.div`
    width: 60%;
    position: relative;
    left: 25%;
    bottom: 60px;
    max-width: 700px;
    margin: 0px 0px 0px 10%;
    text-align: center;
    z-index: 1;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 80%;
        /* left: 15%; */
        left: 0px;
        bottom: 100px;
        margin: 0px auto;
    }
`;

export const BaseContainerB = styled.div`
    width: 60%;
    position: relative;
    left: 25%;
    bottom: 60px;
    max-width: 700px;
    margin: 0px 0px 0px 10%;
    text-align: center;
    z-index: 1;
    display: none;
    background-color: transparent;

    @media (max-width: ${MEDIA.MOBILE}) {
        width: 80%;
        /* left: 15%; */
        left: 0px;
        bottom: 100px;
        margin: 0px auto;
        display: block
    }
`;

export const Statement = styled.div`
    text-align: center;
    padding: 40px;
    width: 50%;
    position: relative;
    left: 25%;
    bottom: 60px;
    max-width: 700px;
    margin: 0px 0px 0px 10%;
    text-align: center;
    z-index: 3;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 80%;
        left: 0px;
        margin: 0px auto 20px;
    }
`;

export const ExperienceContainer = styled.div`
    margin: 40px auto;
    width: 90%;
    text-align: left;
    @media (max-width: ${MEDIA.MOBILE}) {
        display: none;
    }
`;

export const ExCard = styled.div`
    border-left: 1px dashed ${SOLID.GREY};
    padding: 20px 20px 20px 40px;
`;

export const ExImg = styled.img`
    height: 30px;
    position: relative;
    right: 55px;
    top: 10px;
`;

export const ResearchContainer = styled.div`
        margin: 40px auto;
    text-align: left;
    @media (max-width: ${MEDIA.MOBILE}) {
        display: none;
    }
`;

export const ReCard = styled.div`
    border-right: 1px dashed ${SOLID.GREY};
    padding: 20px 40px 20px 20px;
    display: flex;
    flex-direction: row;
`;

export const ReImg = styled.img`
    height: 30px;
    position: relative;
    left: 55px;
`;

export const EducationContainer = styled.div`
    margin: 40px auto;
    width: 90%;
    text-align: left;
    @media (max-width: ${MEDIA.MOBILE}) {
        display: none;
    }
`;

export const EdImg = styled.img`
    height: 30px;
    position: relative;
    right: 55px;
    top: 45px;
`;

export const AwardsContainer = styled.div`
        margin: 40px auto;
    width: 90%;
    @media (max-width: ${MEDIA.MOBILE}) {
        display: none;
    }
`;

export const Awards = styled.div`
    margin: 40px auto;
    width: 90%;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const ACard = styled.div`
    padding: 10px;
    margin: 10px;

`;

export const Icon = styled.img`
    margin: 10px auto;
    height: 50px;
        position: relative;
    top: 30px;
`;

export const H2Btn = styled.button`
    cursor: pointer;
    height: 30px;
    width: 30px;
    z-index: 3;
    position: relative;
    left: 10px;
`;

export const PartContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 99vw;
    height: 99vh;
    display: none;
    z-index: 0;

    @media (max-width: ${MEDIA.TABLET}) {
        display: block;
    }
`;