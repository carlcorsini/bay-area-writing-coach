import _ from 'lodash'
import FadeIn from 'react-fade-in'
import CopyToClipboard from 'react-copy-to-clipboard'
import React, { Component } from 'react'
import {
  Card,
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
  Visibility,
  Button
} from 'semantic-ui-react'

let quotes = [
  [
    'Yes, writing is easy... all you have to do is open a vein and bleed.',
    'Red Smith'
  ],
  [
    'I love deadlines. I love the whooshing noise they make as they go by.',
    'Douglas Adams'
  ],
  [
    "What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though.",
    'J.D. Salinger'
  ],
  [
    'Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.',
    'Virginia Woolf'
  ],
  [
    'One day I will find the right words, and they will be simple.',
    'Jack Kerouac'
  ],
  [
    'You never have to change anything you got up in the middle of the night to write.',
    'Saul Bellow'
  ],
  [
    'No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.',
    'Robert Frost'
  ],
  [
    'The difference between the almost right word and the right word is really a large matter. ’tis the difference between the lightning bug and the lightning.',
    'Mark Twain'
  ],
  ['Fiction is the truth inside the lie.', 'Stephen King'],
  [
    "Don't tell me the moon is shining; show me the glint of light on broken glass.",
    'Anton Chekhov'
  ],
  [
    'Start writing, no matter what. The water does not flow until the faucet is turned on.',
    "Louis L'Amour"
  ]
]

const randomQuote = (array, max) => {
  let random = Math.floor(Math.random() * Math.floor(max))
  return array[random]
}

class HomePage extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    quote: '',
    author: '',
    quote2: '',
    author2: ''
  }

  componentDidMount() {
    let quote = randomQuote(quotes, 11)
    let quote2 = randomQuote(quotes, 11)
    this.setState({
      quote: quote[0],
      author: quote[1],
      quote2: quote2[0],
      author2: quote2[1]
    })
  }

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state

    const handleQuote = e => {
      console.log('hey')
      let quote = randomQuote(quotes, 11)
      let quote2 = randomQuote(quotes, 11)
      this.setState({
        quote: quote[0],
        author: quote[1],
        quote2: quote2[0],
        author2: quote2[1]
      })
    }
    return (
      <div>
        <style>{`
          html, body {
            background: #fff;
          }
        `}</style>

        <Container text>
          {/* <Card centered> */}
          <Image
            centered
            size="small"
            src="https://pre00.deviantart.net/d656/th/pre/i/2004/130/d/6/quill_and_ink.jpg"
          />
          {/* </Card> */}
          <Header style={{ fontSize: '2.5em' }} as="h1">
            Bay Area Writing Coach
          </Header>
          {/* <Button
            size="mini"
            icon="refresh"
            style={{ marginBottom: '1em' }}
            onClick={handleQuote}
            basic
            label="New Quote"
          /> */}
          <Container>
            <FadeIn>
              <p style={{ fontSize: '1.25em' }}>{this.state.quote}</p>
              <p> -{this.state.author}</p>
            </FadeIn>
          </Container>
        </Container>

        <Container text>
          <Divider />
          <Container
            text
            style={{ fontSize: '1.2em', marginTop: '1em' }}
            textAlign="left">
            <p>
              Craig J. “Skip” Corsini, 67, is a lifelong Bay Area resident with
              a lengthy career in multiple industries, having served in public
              and corporate education, sales, marketing, communications, and
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
          <Container style={{ marginTop: '2em' }}>
            <Button.Group vertical>
              <Button
                icon="email"
                primary
                size="huge"
                href="mailto:craigcorsini@gmail.com">
                Inquire By Email
              </Button>
              <CopyToClipboard text={'craigcorsini@gmail.com'}>
                <Button icon="copy" size="huge" secondary>
                  Copy Email to Clipboard
                </Button>
              </CopyToClipboard>
            </Button.Group>
            <Header>Fee structure available upon request</Header>
          </Container>
          <Container style={{ marginTop: '5em', marginBottom: '5em' }}>
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
                    <List.Item>Feature Articles</List.Item>
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
                    <List.Item>Creative Writing</List.Item>
                    <List.Item>Cover Letters</List.Item>
                    <List.Item>Resumes</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider />
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
          <Container style={{ marginTop: '3em' }}>
            <Divider />
            <FadeIn>
              <p style={{ fontSize: '1.25em' }}>{this.state.quote2}</p>
              <p> -{this.state.author2}</p>
            </FadeIn>
            <Divider />
          </Container>
        </Container>
      </div>
    )
  }
}

export default HomePage
