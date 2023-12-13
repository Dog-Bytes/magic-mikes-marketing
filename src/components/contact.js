import React, { useState } from "react";
import { BaseContainer, HeaderTriangle, Content } from "../styling/globalStyleComponents";
import { ContactContainer, FormContainer, FormContainer1, P, H2, } from "../styling/contactStyling";
import { Summary, H1 } from "../styling/bioStyling";
import {LinkContainer, LinkIcon, } from "../styling/footerStyling";
import DraftsIcon from '@mui/icons-material/Drafts';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Contact() {


  return (
    <BaseContainer>
                  <HeaderTriangle />
            <Content>
            <Summary>
                    <H1>CONTACT</H1>
              </Summary>
            </Content>
      <ContactContainer>
        <FormContainer id="form" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38732.13338341741!2d1.64935975129459!3d52.64627896310294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47da06e0437ff871%3A0x1627a084fae7d315!2sCaister-on-Sea%2C%20Great%20Yarmouth!5e0!3m2!1sen!2suk!4v1702467938811!5m2!1sen!2suk" width="300" height="300" style={{margin: "40px auto"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </FormContainer>
        <FormContainer1>
          <H2> Get in touch </H2>
          <P>If you have any questions or simply want to discuss possible options, don't hesitate to contact us.</P>
          <LinkContainer>
          <LinkIcon href="https://wa.me/447864808133" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon style={{ color: "black" }} fontSize="large"/>
          </LinkIcon>
          <LinkIcon href="https://www.facebook.com/magicmikesclearances" target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={{ color: "black" }} fontSize="large"/>
          </LinkIcon>
          <LinkIcon href="mailto:">
            <DraftsIcon style={{ color: "black" }} fontSize="large"/>
          </LinkIcon>
        </LinkContainer>
        </FormContainer1>
      </ContactContainer>
    </BaseContainer>
  );
}
