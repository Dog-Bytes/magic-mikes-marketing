import React from "react";
import { BioContainer, Summary, H1, H2, Divider, Img, BaseContainerB, Statement, ExperienceContainer, EducationContainer, AwardsContainer, ImgContainer, ExCard, ExImg, Icon, ResearchContainer, ReCard, ReImg, EdImg, ACard, Desktop, Mobile, H2Btn, Awards, BaseContainerA } from "../styling/bioStyling";
import {Content, HeaderTriangle } from "../styling/globalStyleComponents";


export default function Bio() {

    
    return (
        <BioContainer>
            <HeaderTriangle />
            <Content>
                <Summary>
                    <H1>ABOUT US</H1>
                </Summary>
            </Content>
            <Content>
                <div>
                    text
                </div>
                <div>
                    image
                </div>
            </Content>
        </BioContainer >
    );
}

