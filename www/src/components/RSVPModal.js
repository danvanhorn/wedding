import React from 'react'
import 'whatwg-fetch'
import validator from 'validator'
import { Container, Button, Modal, Form, Checkbox, Message } from 'semantic-ui-react'


export class RSVPModal extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      attending: '',
      email: '',
      plusOne: false,
      showModal: false,
      success: false,
      error: false,
      loading: false
    }

    this.submitRSVP = this.submitRSVP.bind(this)
    this.isValid = this.isValid.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  isValid() {
    const { firstName, lastName, attending, email } = this.state 
    if(!firstName) {
      return false
    } else if(!lastName) {
      return false;
    } else if(!validator.isEmail(email)) {
      // prompt for valid email
      return false
    } else if (attending === '') {
      return false
    } else {
      return true
    }
  }

  async submitRSVP(event) {
    event.preventDefault();
    const { firstName, lastName, email, attending, plusOne } = this.state 
    if(this.isValid()) {
      try {
        this.setState({ loading: true })
        const response = await window.fetch(`${window.location.href}api/rsvp`, { 
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          type: "application/json",
          body: JSON.stringify({ firstName, lastName, email, attending, plusOne })
        })
        if (response.status === 200){
          const data = await response.json()
          if(data.exists && data.exists === true) {
            this.setState({ error: true, success: false })
          } else {
            this.setState({ success: true, error: false })
          }
        } 
        this.setState({ loading: false })
      } catch(err) {
        console.error(err)
        this.setState({ loading: false })
      }
    }    
  }

  closeModal = () => {
    this.setState({ 
      firstName: '',
      lastName: '',
      attending: '',
      email: '',
      plusOne: false,
      showModal: false,
      success: false,
      error: false
    })
  }

  render() {
    const { showModal, success, error, loading, attending } = this.state
    return (
    <Container textAlign="center">
      <Modal open={showModal} onClose={this.closeModal} closeIcon trigger={<Button onClick={() => this.setState({ showModal: true })} color='red' size="huge">RSVP Online</Button>}>
        <Modal.Header as='h2'>RSVP</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form success={success} error={error} onSubmit={this.submitRSVP}>
              <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' value={this.state.firstName} onChange={(event) => this.setState({ firstName: event.target.value })} />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' value={this.state.lastName} onChange={(event) => this.setState({ lastName: event.target.value })} />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
              </Form.Field>
              <Form.Group inline>
                <Form.Radio label='Gladly Attend!' checked={attending === 'yes'} onChange={(event) => this.setState({ attending: 'yes' })} />
                <Form.Radio label='Regretfully Decline.' checked={attending === 'no'} onChange={(event) => this.setState({ attending: 'no' })} />
              </Form.Group>
              <Form.Field>
                <Checkbox label='If your invitation specifies, will you be bringing a plus one?' onChange={(event) => this.setState({ plusOne: !this.state.plusOne })} />
              </Form.Field>
              <Message success header='Success' content="You've submitted your RSVP" />
              <Message error header='Sorry...' content="It looks like you've already submitted an RSVP" />
              {loading ? <Button loading primary>Loading</Button> : <Button type='submit' color='blue'>Submit</Button>}
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Container>
    )
  }

}