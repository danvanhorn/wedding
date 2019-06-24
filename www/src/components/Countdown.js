import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import moment from 'moment'
import countdown from 'countdown'
import { ParallaxBanner } from 'react-scroll-parallax';

require('moment-countdown')

const parallaxChildren = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  justifyContent: "center"
}

export const Countdown = () => 
  <Container textAlign="center" fluid>
    <ParallaxBanner layers={[
            {
                image: './images/Rosy-Dan-3-web.jpg',
                amount: 0.3
            }
        ]}
        >
          <div style={parallaxChildren}>
            <Header as="h5" style={{color: "white"}}>
              {`${moment().countdown('2019-8-31', countdown.MONTHS|countdown.DAYS).toString()} until the wedding`}
            </Header>
          </div>
    </ParallaxBanner>
  </Container>