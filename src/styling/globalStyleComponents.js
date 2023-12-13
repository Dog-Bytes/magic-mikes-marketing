import styled from 'styled-components';
import { SOLID, MEDIA } from "./variables"



export const AppContainer = styled.div`
background-color: ${SOLID.OFF_WHITE};
width: 100vw;
height: 100vh;
overflow-x: hidden;
`;

export const AppContainerBackground = styled.div`

`;

export const BaseContainer = styled.div`
width: 100vw;
padding: 10px 0px 40px;
background-color: ${SOLID.OFF_WHITE};
text-align: center;

`;

export const Content = styled.div.attrs((props) => props)`
    width: 100%;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    justify-content: ${(props) => props.justifyContent};
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        flex-direction: column;
    }
`;


export const ContentChild = styled.div`
    margin: auto 50px;
    max-width: 300px;
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        margin: auto;
    }
`;

export const Icon = styled.img`
    margin: 0px auto;
    position: relative;
    bottom: 70px;
    height: 110px;
`;

export const HeaderTriangle = styled.div`
    border-top: 300px solid ${SOLID.BLUE};
    border-left: 200vw solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    position: relative;
    top: 0px;
    right: 80vw;
    z-index: 1;
`;

export const Shadow = styled.div`
    color: white;
    text-align: center;
    font-size: 7rem;
    position: absolute;
    top: 50%;
    width: 100%;
    background-color: transparent;
    z-index: 3;
    cursor: none;
    user-select: none;

    @media (max-width: ${MEDIA.TABLET}) {
        font-size: 3rem;
        top: 70%;
    }
`;


export const ShowBtn = styled.button`
    background-color: ${SOLID.WHITE};
    color: ${SOLID.BLUE};
    border: none;
    text-transform: uppercase;
    padding: 10px 30px;
    border-radius: 30px;
    width: 100%;

    &:hover {
        background-color: ${SOLID.YELLOW};
    } 

    &:active {
        background-color: ${SOLID.YELLOW};
    }
`;

export const UpBtn = styled.button`
    position: absolute;
    padding: 2px 4px;
    bottom: 80px;
    right: 0px;
    border: none;
    color: white;
    background-color: ${SOLID.PALE_BLUE};
    opacity: 0.6;
    z-index: 2;
    cursor: pointer;
`

export const Parallelogram = styled.div`
    width: 200px;
    height: 65vh;
    transform: skew(45deg);
    background: ${SOLID.BLUE+"99"};
    z-index: 0;
    position: absolute;
    top: 0;
    left: 50px;
    overflow: hidden;
`;

export const TriangleGreen = styled.div`
    width: 0px;
    height: 0px;
    border-bottom: 500px solid ${SOLID.GREEN+"99"};
    border-right: 500px solid transparent;
    z-index: 0;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  `;

  export const TriangleYellow = styled.div`
    width: 0px;
    height: 0px;
    border-left: 250px solid transparent;
    border-right: 250px solid transparent;
    border-bottom: 250px solid ${SOLID.YELLOW+"99"};
    z-index: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    overflow: hidden;
  `;

  export const H1 = styled.h2`
        font-size: 1.6rem;
`;

  export const H2 = styled.h2`
        font-size: 1.4rem;
`;

export const H3 = styled.h2`
    font-size: 1rem;
`;

export const CardContentBordered = styled.div.attrs((props) => props)`
    width: 90%;
    margin: 0px auto;
    border: 1px dashed black;
    border-radius: 20px;
    padding: 20px;
    background-color: ${(props) => props.backgroundColor};
    max-width: 300px;
    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        min-width: 250px;
        width: 90%;
    }
`;

export const CardContent = styled.div`
    width: 90%;
    margin: 0px auto;
`;

export const CarouselImage = styled.img`
height: 200px;
border-radius: 10px;
`;

export const ContentBanner = styled.div.attrs((props) => props)`
    position: relative;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    margin: 0px;
    padding: 0px;
    width: 100%;
    min-height: 170px;
    background-size: cover;
    background-position: center;
`;


export const ServicesContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    position: relative;
    bottom: 250px;

    @media (max-width: 1500px) {
        flex-direction: column;
}
`;

export const ServicesContainerChild = styled.div.attrs((props) => props)`
width: ${(props) => props.width});
margin: 0px auto;
@media (max-width: 1500px) {
    width: 100%;
    margin: 0px auto 40px;
}
`;

export const ServicePointDetailsContainer = styled.div`
 z-index: 3;
 padding: 10px; 
`;

export const ServicePointImg = styled.div.attrs((props) => props)`
background-image: url(${(props) => props.image});
background-repeat: no-repeat;
margin: 0px;
padding: 0px;
width: 100%;
background-size: cover;
background-position: center;
height: 200px;
border-radius: 10px;
    position: relative;
    border: 4px solid white; 
 z-index: 3;
`;