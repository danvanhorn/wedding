import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Container, Divider } from 'semantic-ui-react'
import { Countdown } from './components/Countdown'
import { Invitation } from './components/Invitation'
import { About } from './components/About'
import { Location } from './components/Location'
import { Registry } from './components/Registry'
import { Contact } from './components/Contact'

const App = ({ mobile }) => (
  <ParallaxProvider>
    <Container fluid>
      <Invitation />
    </Container>
    <Container text>
      <Divider hidden/>
      <Countdown/>
      <Divider />
      <About />
      <Divider />
      <Location />
      <Divider />
      <Registry />
      <Divider />
      <Contact />
      <Divider hidden/>
      <Container textAlign="center">
        <p style={{ color: 'grey' }}>Copyright &copy; 2019 Dan Van Horn</p>
      </Container>
    </Container>    
  </ParallaxProvider>
)

export default App
