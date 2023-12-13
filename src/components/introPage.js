import React from "react";
import { Content, CardContentBordered, ContentBanner, ShowBtn } from "../styling/globalStyleComponents";
import { IntroContainer, Info, InfoContainer, Title, InfoAfter, H1, H3, H3Black, BaseContainer, Point, Points, PP, PointNumber, PointNumberP, CutePhoto } from "../styling/introPageStyling";
import { SOLID } from "../styling/variables";
import Rubbish from "../assets/imgs/before_and_after_3.jpeg";
import Rubbish4 from "../assets/imgs/before_and_after_4.jpeg";
import Services from "./services";
import Testimonials from "./testimonials";

export default function IntroPage(props) {

  return (
    <div>
      <IntroContainer className="introPageContainer">
          {/* <ImgVan /> */}
        <Info className="introbox">
          <InfoContainer>
            <H1>Magic Mike’s Clearance Experts</H1>
            <H3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</H3>
            <ShowBtn>Find out more</ShowBtn>
          </InfoContainer>
          <CutePhoto />
        </Info>
        <InfoAfter />
        <BaseContainer>
          <Content flexDirection={"column"}>
              <Title>How we work:</Title>
            <Points>
              <Point>
                <CardContentBordered backgroundColor={SOLID.WHITE}>
                  <PointNumber backgroundColor={SOLID.BLUE}><PointNumberP>01</PointNumberP></PointNumber>
                  <H3Black>Lorem ipsum</H3Black>
                  <PP>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</PP>
                </CardContentBordered>
              </Point>
              <Point>
                <CardContentBordered backgroundColor={SOLID.WHITE}>
                  <PointNumber backgroundColor={SOLID.YELLOW}><PointNumberP>02</PointNumberP></PointNumber>
                  <H3Black>Lorem ipsum</H3Black>
                  <PP>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</PP>
                </CardContentBordered>
              </Point>
              <Point>
                <CardContentBordered backgroundColor={SOLID.WHITE}>
                  <PointNumber backgroundColor={SOLID.GREEN}><PointNumberP>03</PointNumberP></PointNumber>
                  <H3Black>Lorem ipsum</H3Black>
                  <PP>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</PP>
                </CardContentBordered>
              </Point>
            </Points>
          </Content>
          <ContentBanner image={Rubbish}>
          </ContentBanner>
         <Services />
          <ContentBanner image={Rubbish4}>
          </ContentBanner>
          <Testimonials />
        </BaseContainer>
      </IntroContainer>
    </div>
  )
}
