import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'
import { ParallaxBanner } from 'react-scroll-parallax';

const parallaxChildren = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center"
  }

export const Registry = () => 
    <Container textAlign="center" fluid>
        <ParallaxBanner layers={[
            {
                image: './images/Rosy-Dan-1-web.jpg',
                amount: 0.3
            }
        ]}
        style={{minHeight: "300px"}}>
          <div style={parallaxChildren}>
            <Header as="h4" style={{color: "white"}}>Registry</Header>
            <Icon.Group>
                <a href="https://www.amazon.com/wedding/share/danandrosywedding">
                    <Icon link name="amazon" color="yellow" size="massive"></Icon>
                </a>
                <a href="http://www.target.com/gift-registry/gift/danandrosywedding">
                    <Icon link name="target" color="red" size="massive"></Icon>
                </a>
            </Icon.Group>
          </div>
    </ParallaxBanner>

    </Container>