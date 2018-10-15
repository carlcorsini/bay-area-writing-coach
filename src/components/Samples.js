import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import './blog.css'

import { Container, Divider, Header, Image } from 'semantic-ui-react'

import quotes from './quotes'

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
    let quote = randomQuote(quotes, quotes.length - 1)
    let quote2 = randomQuote(quotes, quotes.length - 1)
    let quote3 = randomQuote(quotes, quotes.length - 1)
    let quote4 = randomQuote(quotes, quotes.length - 1)
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

  handleQuote = e => {
    let quote = randomQuote(quotes, quotes.length - 1)
    let quote2 = randomQuote(quotes, quotes.length - 1)
    let quote3 = randomQuote(quotes, quotes.length - 1)
    let quote4 = randomQuote(quotes, quotes.length - 1)
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
    return (
      <Container fluid>
        <Container fluid text>
          <Image
            onClick={this.handleQuote}
            centered
            size="small"
            src="https://pre00.deviantart.net/d656/th/pre/i/2004/130/d/6/quill_and_ink.jpg"
          />

          <Header style={{ fontSize: '2.5em' }} as="h1">
            Portfolio
          </Header>
          <Container style={{ color: 'rgb(41, 41, 41)' }} fluid>
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
            <a href="https://td.org/td"> TD Magazine</a>
          </Header>
          <Container
            text
            style={{ marginTop: '3em', color: 'rgb(41, 41, 41)' }}>
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
            style={{ fontSize: '1.2em', marginTop: '3em' }}
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
            <a href="https://td.org/td"> TD Magazine</a>
          </Header>
          <Container
            text
            style={{ marginTop: '3em', color: 'rgb(41, 41, 41)' }}>
            <Divider />
            <FadeIn>
              <p style={{ fontSize: '1.25em' }}>{this.state.quote3}</p>
              <p> -{this.state.author3}</p>
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
              href="https://drive.google.com/file/d/14_CjsX1QGCfkx9xW4WEYnGOypsylZJUi/view?usp=sharing"
              fluid
              centered
              src="https://i.imgur.com/fau7gfH.jpg"
            />
          </Container>
          <Header textAlign="center" as="h6">
            Displayed with permission from the Association for
            <a href="https://td.org"> Taken Development </a>&
            <a href="https://td.org/td"> TD Magazine</a>
          </Header>
        </Container>

        <Container text style={{ marginTop: '3em', color: 'rgb(41, 41, 41)' }}>
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
