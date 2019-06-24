import React from 'react'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import { Container, Divider } from 'semantic-ui-react'
import { Countdown } from './components/Countdown'
import { Invitation } from './components/Invitation'
import { About } from './components/About'
import { Location } from './components/Location'
import { Registry } from './components/Registry'
import { Contact } from './components/Contact'

const App = ({ mobile }) => (
  <ParallaxProvider>
    <Invitation />
    <Divider hidden/>
    <Countdown/>
    <Container text>
      <Divider hidden/>
      <About />
    </Container>
    <Divider hidden/>
    <Registry />
    <Container text>
      <Divider hidden/>
      <Location />
    </Container>
    <Container fluid>
      <Divider hidden/>
      <ParallaxBanner layers={[
            {
                image: './images/Rosy-Dan-11-web.jpg',
                amount: 0.5
            }
        ]}
        >
      </ParallaxBanner>
      <Divider hidden/>
      <Contact />
      <Divider hidden/>
    </Container>  
    <Container textAlign="center" fluid>
      <Divider hidden/>
        <ParallaxBanner layers={[
              {
                  image: './images/Rosy-Dan-5-web.jpg',
                  amount: 0.4
              }
          ]}
          >
        </ParallaxBanner>
        <p style={{ color: 'grey', fontSize: '12px' }}>Copyright &copy; 2019 Dan Van Horn | Photography by Maddie Maschger</p>
      </Container>   
  </ParallaxProvider>
)

export default App
