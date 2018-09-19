import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Document } from 'react-pdf'
import _ from 'lodash'
import './blog.css'
import ImgsViewer from 'react-images-viewer'
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
    'I have not failed. I’ve just found 10,000 ways that won’t work.',
    'Thomas Edison'
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

class Samples extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    quote: '',
    author: '',
    quote2: '',
    author2: ''
  }

  componentDidMount() {
    let quote = randomQuote(quotes, 12)
    let quote2 = randomQuote(quotes, 12)
    let quote3 = randomQuote(quotes, 12)
    let quote4 = randomQuote(quotes, 12)
    this.setState({
      quote: quote[0],
      author: quote[1],
      quote2: quote2[0],
      author2: quote2[1],
      quote3: quote3[0],
      author3: quote3[1],
      quote4: quote4[0],
      author4: quote4[1]
    })
  }

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state

    const handleQuote = e => {
      console.log('hey')
      let quote = randomQuote(quotes, 12)
      let quote2 = randomQuote(quotes, 12)
      let quote3 = randomQuote(quotes, 12)
      let quote4 = randomQuote(quotes, 12)
      this.setState({
        quote: quote[0],
        author: quote[1],
        quote2: quote2[0],
        author2: quote2[1],
        quote3: quote3[0],
        author3: quote3[1],
        quote4: quote4[0],
        author4: quote4[1]
      })
    }
    return (
      <Container fluid>
        <Container fluid text>
          <Image
            centered
            size="small"
            src="https://pre00.deviantart.net/d656/th/pre/i/2004/130/d/6/quill_and_ink.jpg"
          />

          <Header style={{ fontSize: '2.5em' }} as="h1">
            Portfolio
          </Header>
          <Container fluid>
            <FadeIn>
              <p style={{ fontSize: '1.25em' }}>{this.state.quote}</p>
              <p> -{this.state.author}</p>
            </FadeIn>
          </Container>
        </Container>
        <Container>
          <Divider />
          <Container
            className="images-container"
            fluid
            text
            style={{ fontSize: '1.2em', marginTop: '1em' }}
            textAlign="left">
            <Image
              style={{ width: '150%' }}
              as="a"
              target="_blank"
              href="https://drive.google.com/file/d/1C2PfSoe0PUjYrihACBGPN78yUP3UVsCk/view?usp=sharing"
              fluid
              src="https://i.imgur.com/bPgN72N.jpg"
            />
          </Container>
          <Header textAlign="center" as="h6">
            Displayed with permission from the Association for
            <a href="https://td.org"> Taken Development </a>&
            <a href="https://td.org/td"> TD magazine</a>
          </Header>
          <Container style={{ marginTop: '3em' }}>
            <Divider />
            <FadeIn>
              <p style={{ fontSize: '1.25em' }}>{this.state.quote2}</p>
              <p> -{this.state.author2}</p>
            </FadeIn>
            <Divider />
          </Container>
          <Container
            className="images-container"
            fluid
            text
            style={{ fontSize: '1.2em', marginTop: '1em' }}
            textAlign="left">
            <Image
              as="a"
              target="_blank"
              href="https://drive.google.com/file/d/1uhKjKXbxKa9fS1rPAwxMUs4eVPY-k12U/view?usp=sharing"
              fluid
              centered
              src="https://i.imgur.com/A8AFzqu.jpg"
            />
          </Container>
          <Header textAlign="center" as="h6">
            Displayed with permission from the Association for
            <a href="https://td.org"> Taken Development </a>&
            <a href="https://td.org/td"> TD magazine</a>
          </Header>
          <Container style={{ marginTop: '3em' }}>
            <Divider />
            <FadeIn>
              <p style={{ fontSize: '1.25em' }}>{this.state.quote3}</p>
              <p> -{this.state.author3}</p>
            </FadeIn>
          </Container>
          <Divider />
          <Container
            className="images-container"
            fluid
            text
            style={{ fontSize: '1.2em', marginTop: '1em' }}
            textAlign="left">
            <Image
              as="a"
              target="_blank"
              href="https://drive.google.com/file/d/14_CjsX1QGCfkx9xW4WEYnGOypsylZJUi/view?usp=sharing"
              fluid
              centered
              src="https://i.imgur.com/fau7gfH.jpg"
            />
          </Container>
          <Header textAlign="center" as="h6">
            Displayed with permission from the Association for
            <a href="https://td.org"> Taken Development </a>&
            <a href="https://td.org/td"> TD magazine</a>
          </Header>
        </Container>

        <Container style={{ marginTop: '3em' }}>
          <Divider />
          <FadeIn>
            <p style={{ fontSize: '1.25em' }}>{this.state.quote4}</p>
            <p> -{this.state.author4}</p>
          </FadeIn>
          <Divider />
        </Container>
      </Container>
    )
  }
}

export default Samples
