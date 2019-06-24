import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { Container, Header } from 'semantic-ui-react'
import { RSVPModal } from './RSVPModal'


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

export const Invitation = () => 
    <Container textAlign='center' fluid>
        <ParallaxBanner layers={[
                {
                    image: './images/Rosy-Dan-9-web.jpg',
                    amount: -0.9
                }
            ]}
            >
            <div style={parallaxChildren}>
                <Header as='h2' style={{color: "white"}}>You're Invited...</Header>
            </div>
        </ParallaxBanner>
        <Header as='h4'>To the marriage of Daniel Van Horn and Rosanna Rocha</Header>
        <Header as='h4'>August 31, 2019</Header>
        <RSVPModal />
        {/* <Image src='./images/tree.png' size='medium' wrapped /> */}
    </Container>