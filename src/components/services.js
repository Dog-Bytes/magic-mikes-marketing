import React from "react";
import { Content, CardContent,} from "../styling/globalStyleComponents";
import { Title,H3Black, H1Black,PP, ServicePoint, ServicePoints, ServiceIcon } from "../styling/introPageStyling";
import { SOLID } from "../styling/variables";
import { services } from "../assets/data";

export default function Services(props) {

  return (
    <div>
          <Content color={SOLID.WHITE}>
              <Title>Our Services</Title>
          </Content>
          <Content color={SOLID.WHITE} justifyContent={"center"}>
            <ServicePoints>
            {
                            services.services.map((curr, index) => {
                                return (
                                  <ServicePoint backgroundColor={SOLID.WHITE}>
                                    <ServiceIcon icon={curr.icon} />
                                    <CardContent>
                                      <H3Black>{curr.title}</H3Black>
                                      <PP>{curr.summary}</PP>
                                    </CardContent>
                                  </ServicePoint>
                                )
                            })
                        }
            </ServicePoints>
          </Content>
          </div>
  )
}
