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
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  marginBottom: '1em'
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em'
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease'
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px'
}

class Navbar extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false
  }

  handleOverlayRef = c => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({
        overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width')
      })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state
    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}>
        <Menu
          borderless
          fixed={menuFixed && 'top'}
          style={menuFixed ? fixedMenuStyle : menuStyle}>
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
            <Menu.Item as="a" href="#footer">
              Contact
            </Menu.Item>
          </Container>
        </Menu>
      </Visibility>
    )
  }
}

export default Navbar
