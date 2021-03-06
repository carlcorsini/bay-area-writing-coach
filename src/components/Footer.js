import React, { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

import {
  Button,
  Container,
  Grid,
  Header,
  List,
  Segment,
  Transition,
  Label
} from 'semantic-ui-react'

class Footer extends Component {
  state = { visible: false }
  handleCopy = e => {
    this.setState({ visible: true })
    setTimeout(() => {
      this.setState({ visible: false })
    }, 1000)
  }
  render() {
    return (
      <Segment
        inverted
        style={{ margin: '5em 0em 0em', padding: '3em 0em' }}
        vertical>
        <Container id="footer" textAlign="center">
          <Grid columns={2} divided stackable inverted>
            <Grid.Row>
              <Grid.Column style={{ marginTop: '2em' }}>
                <Header inverted as="h4" content="Links" />
                <List link inverted>
                  <List.Item as="a" href="/home">
                    Home
                  </List.Item>
                  <List.Item as="a" href="/samples">
                    Portfolio
                  </List.Item>
                  <List.Item as="a" href="/blog">
                    Blog
                  </List.Item>
                  <List.Item
                    target="_blank"
                    as="a"
                    href="http://skipcorsini.tumblr.com/">
                    Tumblr
                  </List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <Header inverted as="h4" content="Contact" />
                <p>
                  Please direct all inquiries regarding appointments and fee
                  structure to craigcorsini@gmail.com.
                </p>
                <Button.Group inverted basic vertical>
                  <CopyToClipboard text={'craigcorsini@gmail.com'}>
                    <Button onClick={this.handleCopy} secondary>
                      Copy Email to Clipboard
                    </Button>
                  </CopyToClipboard>
                  <Transition
                    visible={this.state.visible}
                    animation="browse"
                    duration={250}>
                    <Label
                      size="tiny"
                      style={{ position: 'absolute' }}
                      color="red">
                      Copied!
                    </Label>
                  </Transition>
                  <Button primary href="mailto:craigcorsini@gmail.com">
                    Inquire By Email
                  </Button>
                </Button.Group>
                <div style={{ marginTop: '1em', fontSize: '.75em' }}>
                  <p>
                    Website Designed by
                    <a href="http://carlcorsini.com"> Carl Corsini</a>
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

export default Footer
