import _ from 'lodash'
import React, { Component } from 'react'
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
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease'
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

const LeftImage = () => (
  <Image
    floated="left"
    size="medium"
    src="https://pre00.deviantart.net/d656/th/pre/i/2004/130/d/6/quill_and_ink.jpg"
    style={{ margin: '2em 2em 2em -4em' }}
  />
)

const RightImage = () => (
  <Image
    floated="right"
    size="medium"
    src="https://pre00.deviantart.net/d656/th/pre/i/2004/130/d/6/quill_and_ink.jpg"
    style={{ margin: '2em -4em 2em 2em' }}
  />
)

const Paragraph = () => (
  <p>
    {[
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
      'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
      'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
      'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
      'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
      'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
      'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
      'accumsan porttitor, facilisis luctus, metus'
    ].join('')}
  </p>
)

export default class HomePage extends Component {
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
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>{`
          html, body {
            background: #fff;
          }
        `}</style>

        <Container text style={{ marginTop: '2em' }}>
          <Image
            centered
            style={{ margin: 'auto' }}
            size="medium"
            src="https://pre00.deviantart.net/d656/th/pre/i/2004/130/d/6/quill_and_ink.jpg"
          />
          <Header as="h1">Bay Area Writing Coach</Header>
          <p>Editing | Something | Consulting</p>
        </Container>

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}>
          <Menu
            link
            stackable
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle}>
            <Container text>
              <Menu.Item>
                <Image
                  size="mini"
                  src="https://pre00.deviantart.net/d656/th/pre/i/2004/130/d/6/quill_and_ink.jpg"
                />
              </Menu.Item>
              <Menu.Item header>Bay Area Writing Coach</Menu.Item>
              <Menu.Item href="#bio" as="a">
                Bio
              </Menu.Item>
              <Menu.Item href="#philo" as="a">
                Philosophy
              </Menu.Item>
              <Menu.Item as="a">Contact</Menu.Item>
              <Menu.Item as="a">Payment</Menu.Item>

              {/* <Menu.Menu position="right">
                <Dropdown text="More" pointing className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className="dropdown icon" />
                      <span className="text">Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu> */}
            </Container>
          </Menu>
        </Visibility>

        <Container text>
          {/* Example with overlay menu is more complex, SUI simply clones all elements inside, but we should use a
              different approach.
              An empty Visibility element controls the need to change the fixing of element below, it also uses height
              and width params received from its ref for correct display.
            */}
          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.unStickOverlay}
            style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
          />

          <div
            ref={this.handleOverlayRef}
            style={overlayFixed ? fixedOverlayStyle : overlayStyle}>
            <Menu
              icon="labeled"
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical>
              <Menu.Item
                position="right"
                style={{ textDecoration: 'none' }}
                href="mailto:craigcorsini@gmail.com">
                <Icon name="mail" />
                Email
              </Menu.Item>
            </Menu>
          </div>

          <Paragraph />
          <Paragraph />

          <Segment style={{ padding: '0em' }} vertical>
            <Grid divided columns="equal" stackable>
              <Grid.Row textAlign="center">
                <Grid.Column
                  style={{
                    fontSize: '1.5em',
                    paddingBottom: '2em',
                    paddingTop: '2em'
                  }}>
                  <List>
                    <List.Item>College Applications</List.Item>
                    <List.Item>Essays</List.Item>
                    <List.Item>Research Papers</List.Item>
                    <List.Item>Thesis</List.Item>
                    <List.Item>CSS</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column
                  style={{
                    fontSize: '1.5em',
                    paddingBottom: '2em',
                    paddingTop: '2em'
                  }}>
                  <List>
                    <List.Item>High School</List.Item>
                    <List.Item>College</List.Item>
                    <List.Item>Writers</List.Item>
                    <List.Item>Readers</List.Item>
                    <List.Item>Others</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column
                  style={{
                    fontSize: '1.5em',
                    paddingBottom: '2em',
                    paddingTop: '2em'
                  }}>
                  <List>
                    <List.Item>Editing</List.Item>
                    <List.Item>Consulting</List.Item>
                    <List.Item>Feedback</List.Item>
                    <List.Item>Teaching</List.Item>
                    <List.Item>Success</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment id="philo">
            <Paragraph />
            <Paragraph />
          </Segment>
        </Container>

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
                  <Header inverted as="h4" content="Footer Header" />
                  <p>craigcorsini@gmail.com</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            {/* <Image
              src="https://pre00.deviantart.net/d656/th/pre/i/2004/130/d/6/quill_and_ink.jpg"
              centered
              size="mini"
            /> */}
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
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}
