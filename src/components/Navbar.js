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

const menuStyle = {
  borderRadius: 0,
  border: 0,
  textAlign: 'center'
}

class Navbar extends Component {
  render() {
    return (
      <Menu stackable style={menuStyle}>
        <Container text>
          <Menu.Item href="/" as="a">
            Home
          </Menu.Item>
          <Menu.Item href="/samples" as="a">
            Portfolio
          </Menu.Item>
          <Menu.Item href="/blog" as="a">
            Blog
          </Menu.Item>
          <Menu.Item icon="copy" as="a" href="mailto:craigcorsini@gmail.com">
            craigcorsini@gmail.com
          </Menu.Item>
          <Menu.Item as="a" href="tel:7073295999">
            (707) 329-5999
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Navbar
