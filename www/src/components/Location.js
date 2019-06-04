import React from 'react'
import { Container, Header, Card, Embed } from 'semantic-ui-react'

export const Location = () => 
    <Container textAlign='center'>
        <Header as='h4'>Location</Header>
        <Card.Group centered>
            <Card centered>
                <Embed
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.3629033178686!2d-123.07942478494243!3d45.220226179098916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495442d52fe0a39%3A0xc24603440629e6c9!2s407+Ferry+St%2C+Dayton%2C+OR+97114!5e0!3m2!1sen!2sus!4v1559623127669!5m2!1sen!2sus"
                    defaultActive
                />
                <Card.Content>
                    <Card.Header as='h4'>The Ceremony</Card.Header>
                    <Card.Meta textAlign="left">August 31, 2019 / Time<br />407 Ferry St.<br />Dayton, OR 97114</Card.Meta>
                </Card.Content>
            </Card>
            <Card centered>
                <Embed
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2815.3456032306963!2d-123.10486468494662!3d45.119331979098455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549551c9a2604a13%3A0xa07407b54cc598c!2s13225+SE+Finn+Ln%2C+Dayton%2C+OR+97114!5e0!3m2!1sen!2sus!4v1559623251106!5m2!1sen!2sus"
                    defaultActive
                />
                <Card.Content>
                    <Card.Header as='h4'>The Reception</Card.Header>
                    <Card.Meta textAlign="left">August 31, 2019 / Time<br />13225 SE Finn Ln.<br />Dayton, OR 97114</Card.Meta>
                </Card.Content>
            </Card>
        </Card.Group>
    </Container>