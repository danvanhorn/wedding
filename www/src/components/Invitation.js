import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { Container, Header, Image} from 'semantic-ui-react'


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
                    image: './images/0.jpg',
                    amount: 0.2
                }
            ]}
            >
            <div style={parallaxChildren}>
                <Header as='h2' style={{color: "white"}}>You're Invited...</Header>
            </div>
        </ParallaxBanner>
        <Header as='h4'>To the marriage of Daniel Van Horn and Rosanna Rocha.</Header>
        <Image src='./images/tree.png' size='medium' wrapped />
    </Container>