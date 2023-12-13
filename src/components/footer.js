import React from "react";
import { FooterContainer, LinkContainer, ContentContainerFooter, ContentContainer, Img, ImgLogos, ImgWaste, H3, P, DetailsContainer, LinkIcon, FooterLegalContainer, FooterContentContainer } from "../styling/footerStyling";
import LogoImg from "../assets/imgs/magic_mike_logo_white.png";
import DbsImg from "../assets/imgs/dbs.png";
import YarmouthCouncilImg from "../assets/imgs/great_yarmouth_council.png";
import EnvironmentAgencyImg from "../assets/imgs/environment_agency.png";
import ChristmasVan from "../assets/imgs/christmas_van.png";
import InsuredImg from "../assets/imgs/fully-insured-img.png";
import DraftsIcon from '@mui/icons-material/Drafts';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {

  return (
    <div>
    <FooterContainer>
      <FooterContentContainer>
        <ContentContainer>
        <Img src={LogoImg} alt="Magic Mikes Logo" />
        <DetailsContainer>
          <ContentContainer>
            <H3>Email us</H3>
            <LinkIcon href="mailto:">email@email.com</LinkIcon>
          </ContentContainer>
          <ContentContainer>
            <H3>Call us</H3>
            <LinkIcon href="tel:6177787312">0927 6277 28525</LinkIcon>
          </ContentContainer>
        </DetailsContainer>
        <LinkContainer>
          <LinkIcon href="https://wa.me/447864808133" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon style={{ color: "white" }} />
          </LinkIcon>
          <LinkIcon href="https://www.facebook.com/magicmikesclearances" target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={{ color: "white" }} />
          </LinkIcon>
          <LinkIcon href="mailto:">
            <DraftsIcon style={{ color: "white" }} />
          </LinkIcon>
        </LinkContainer>
        </ContentContainer>
        <ContentContainer>

        <ImgWaste src={ChristmasVan} alt="Magic Mikes Logo" />
        </ContentContainer>
      </FooterContentContainer>
      <ContentContainerFooter>
      <ImgLogos src={InsuredImg} alt="Fully insured" />
      <ImgLogos src={EnvironmentAgencyImg} alt="Environment Agency" />
      <ImgLogos src={YarmouthCouncilImg} alt="Great Yarmouth Council" />
      <ImgLogos src={DbsImg} alt="DBS checked" />
      </ContentContainerFooter>
    </FooterContainer>
    <FooterLegalContainer>
      <P>Dog Bytes Ltd. © Copyright 2024. All Rights Reserved.</P>
    </FooterLegalContainer>
    </div>
  );
}
