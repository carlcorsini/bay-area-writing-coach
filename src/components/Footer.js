import React, { Component } from 'react'
import _ from 'lodash'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <Segment
        inverted
        style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        vertical>
        <Container textAlign="center">
          <Grid columns={2} divided stackable inverted>
            <Grid.Row>
              <Grid.Column>
                <Header inverted as="h4" content="Group 1" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <Header inverted as="h4" content="Email" />
                <p>craigcorsini@gmail.com</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {/* <Divider inverted section />
          <List horizontal inverted divided link>
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List> */}
        </Container>
      </Segment>
    )
  }
}

export default Footer
