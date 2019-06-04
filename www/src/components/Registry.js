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
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center"
  }

export const Registry = () => 
    <Container textAlign="center" fluid>
        <ParallaxBanner layers={[
            {
                image: './images/3.jpg',
                amount: 0.3
            }
        ]}
        >
          <div style={parallaxChildren}>
            <Header as="h4">Registry</Header>
            <Icon.Group>
                <a href="https://www.amazon.com/wedding/organize-registry?ref_=wedding_subnav">
                    <Icon link name="amazon" color="yellow" size="massive"></Icon>
                </a>
                <a href="http://www.target.com/gift-registry/gift/danandrosywedding">
                    <Icon link name="target" color="red" size="massive"></Icon>
                </a>
            </Icon.Group>
          </div>
    </ParallaxBanner>

    </Container>