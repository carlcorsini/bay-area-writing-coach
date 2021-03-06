import CopyToClipboard from 'react-copy-to-clipboard'

import React, { Component } from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Button,
  Label,
  Transition
} from 'semantic-ui-react'

import quotes from './quotes'

const randomQuote = (array, max) => {
  let random = Math.floor(Math.random() * Math.floor(max))
  return array[random]
}

class HomePage extends Component {
  state = {
    visible: false,
    visibleQuote: false,
    menuFixed: false,
    overlayFixed: false,
    quote: '',
    author: '',
    quote2: '',
    author2: '',
    changed: false
  }

  componentDidMount() {
    let quote = randomQuote(quotes, quotes.length)
    let quote2 = randomQuote(quotes, quotes.length)
    this.setState({
      quote: quote[0],
      author: quote[1],
      quote2: quote2[0],
      author2: quote2[1]
    })
    setTimeout(() => {
      this.setState({ visibleQuote: true })
    }, 200)
  }

  handleQuote = e => {
    this.setState({ visibleQuote: false })
    setTimeout(() => {
      let quote = randomQuote(quotes, quotes.length)
      let quote2 = randomQuote(quotes, quotes.length)
      this.setState({
        quote: quote[0],
        author: quote[1],
        quote2: quote2[0],
        author2: quote2[1]
      })
      this.setState({ visibleQuote: true })
    }, 500)
  }

  handleCopy = e => {
    this.setState({ visible: true })
    setTimeout(() => {
      this.setState({ visible: false })
    }, 1000)
  }

  render() {
    return (
      <div>
        <Container style={{ paddingBottom: '2em' }} text>
          <Image
            onClick={this.handleQuote}
            centered
            size="small"
            src="https://pre00.deviantart.net/d656/th/pre/i/2004/130/d/6/quill_and_ink.jpg"
          />

          <Header style={{ fontSize: '2.5em' }} as="h1">
            Bay Area Writing Coach
          </Header>

          <Container style={{ color: 'rgb(41, 41, 41)' }}>
            <Transition
              visible={this.state.visibleQuote}
              animation="fade up"
              duration={500}>
              <p style={{ fontSize: '1.25em' }}>{this.state.quote}</p>
            </Transition>
            <Transition
              visible={this.state.visibleQuote}
              animation="fade up"
              duration={500}>
              <p> -{this.state.author}</p>
            </Transition>
          </Container>
        </Container>

        <Container text>
          <Divider />
          <Container
            text
            style={{ fontSize: '1.2em', marginTop: '1em' }}
            textAlign="left">
            <p>
              Craig J. “Skip” Corsini, is a lifelong Bay Area resident with a
              lengthy career in multiple industries, having served in public and
              corporate education, sales, marketing, communications, and
              non-profit program management. He is a 1973 graduate of the
              University of California at Berkeley in geography and holds
              California Teaching Credentials earned at Sonoma State University
              in 1979.
            </p>
            <p>
              His published writing and editing practice has been focused on
              professional training and education, leadership, business
              management, and change management in organizations. He has coached
              high school basketball in the North Bay since 1979.
            </p>
            <p>Bay Area Writing Coach was established in 2018.</p>
          </Container>
          <Header>Fee structure available upon request</Header>
          <Container style={{ marginTop: '2em' }}>
            <Button.Group vertical>
              <CopyToClipboard text={'craigcorsini@gmail.com'}>
                <Button onClick={this.handleCopy} size="huge" secondary>
                  Copy Email to Clipboard
                </Button>
              </CopyToClipboard>
              <Transition
                visible={this.state.visible}
                animation="browse"
                duration={250}>
                <Label style={{ position: 'absolute' }} color="red">
                  Copied!
                </Label>
              </Transition>
              <Button primary size="huge" href="mailto:craigcorsini@gmail.com">
                Inquire By Email
              </Button>
            </Button.Group>
          </Container>
          <Container
            style={{
              marginTop: '5em',
              marginBottom: '3em'
            }}>
            <Grid divided columns="equal" stackable>
              <Header>Services Include:</Header>
              <Grid.Row textAlign="center">
                <Grid.Column
                  style={{
                    fontSize: '1.5em',
                    paddingBottom: '2em',
                    paddingTop: '2em'
                  }}>
                  <List>
                    <List.Item>College Essays</List.Item>
                    <List.Item>Theses</List.Item>
                    <List.Item>White Papers</List.Item>
                    <List.Item>Term Papers</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column
                  style={{
                    fontSize: '1.5em',
                    paddingBottom: '2em',
                    paddingTop: '2em'
                  }}>
                  <List>
                    <List.Item>Business Corespondence</List.Item>
                    <List.Item>Cover Letters & Resumes</List.Item>
                    <List.Item>Marketing Copy</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column
                  style={{
                    fontSize: '1.5em',
                    paddingBottom: '2em',
                    paddingTop: '2em'
                  }}>
                  <List>
                    <List.Item>Fiction</List.Item>
                    <List.Item>Feature Articles</List.Item>
                    <List.Item>Creative Writing</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider />
          </Container>
          <Container style={{ marginBottom: '3em' }}>
            <Image
              style={{ boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)' }}
              rounded
              centered
              size="medium"
              src="https://i.imgur.com/U5USNMI.jpg"
            />
          </Container>
          <Container style={{ fontSize: '1.2em' }} textAlign="left">
            <Header textAlign="center">Philosophy</Header>
            <p>Writing is hard.</p>
            <p>Even though it may seem easy.</p>
            <p>
              The best quotation about writing has been attributed to the late
              Irving “Red” Smith, the celebrated New York Times sportswriter,
              who is reported to have responded to a comment from an
              acquaintance about what a cushy job he had at the Times, “Oh,
              sure, writing is easy, all you have to do is open a vein and
              bleed.”
            </p>
            <p>
              The challenge of writing well encompasses the fact that it is a
              solitary activity, at least until the “finished product” is
              submitted to an editor or other reviewer. Solitude is salve for
              some people and hell for others. For people who are
              self-disciplined, the process can be most pleasurable. For others,
              it can be similar to dragging one’s fingers along a chalkboard for
              several hours or longer. And it is often the case that writing
              talent and self-discipline are not in sync, leading to the popular
              and redundant term “struggling writer.”
            </p>
            <p>
              So, when writing, think of the Winston Churchill quotation about
              determination, “When you are going through hell, keep going.”
            </p>
          </Container>
          <Container style={{ marginTop: '3em', color: 'rgb(41, 41, 41)' }}>
            <Divider />

            <p style={{ fontSize: '1.25em' }}>{this.state.quote2}</p>
            <p> -{this.state.author2}</p>

            <Divider />
          </Container>
        </Container>
      </div>
    )
  }
}

export default HomePage
