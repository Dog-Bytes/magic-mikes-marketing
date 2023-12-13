import React, { useState, useEffect } from 'react';
import { BaseContainer, HeaderTriangle, Content, CardContent, ServicesContainer, ServicesContainerChild, ServicePointDetailsContainer, ServicePointImg } from "../styling/globalStyleComponents";
import { H3Black, H1Black, PP, ServicePointPage, ServicePointsPage, ServiceIconPage } from "../styling/introPageStyling";
import { Summary, H1 } from "../styling/bioStyling";
import { SOLID } from "../styling/variables";
import { services } from "../assets/data";

export default function ServicesPage(props) {

  const [dataIndex, setIndex] = useState(0);

  const handleClick = e => {
    setIndex(e.currentTarget.getAttribute('index'));
  }

  return (
    <BaseContainer>
      <HeaderTriangle />
      <Content>
        <Summary>
          <H1>Our Services</H1>
        </Summary>
      </Content>
      <ServicesContainer>
        <ServicesContainerChild>
          <ServicePointsPage>
            {
              services.services.map((curr, index) => {
                return (
                  <ServicePointPage backgroundColor={SOLID.WHITE} onClick={handleClick} index={index}>
                    <ServiceIconPage icon={curr.icon} />
                    <CardContent>
                      <H3Black>{curr.title}</H3Black>
                    </CardContent>
                  </ServicePointPage>
                )
              })
            }
          </ServicePointsPage>
        </ServicesContainerChild>
        <ServicesContainerChild>

          <ServicePointDetailsContainer  >
            <CardContent>
              <ServicePointImg image={services.services[dataIndex].image} />
              <H1Black>{services.services[dataIndex].title}</H1Black>
              <PP>{services.services[dataIndex].summary}</PP>
              <PP>{services.services[dataIndex].details}</PP>
            </CardContent>
          </ServicePointDetailsContainer>
        </ServicesContainerChild>
      </ServicesContainer>
    </BaseContainer>
  )
}
