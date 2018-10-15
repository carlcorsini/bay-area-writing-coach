import React, { Component } from 'react'
import FadeIn from 'react-fade-in'

import {
  Card,
  Container,
  Divider,
  Header,
  Image,
  List
} from 'semantic-ui-react'

import quotes from './quotes'

const randomQuote = (array, max) => {
  let random = Math.floor(Math.random() * Math.floor(max))
  return array[random]
}

class Blog extends Component {
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
      <Container>
        <Container fluid text>
          <Image
            onClick={this.handleQuote}
            centered
            size="small"
            src="https://pre00.deviantart.net/d656/th/pre/i/2004/130/d/6/quill_and_ink.jpg"
          />

          <Header style={{ fontSize: '2.5em' }} as="h1">
            Blog
          </Header>

          <Container style={{ color: 'rgb(41, 41, 41)' }} fluid>
            <FadeIn>
              <p style={{ fontSize: '1.25em' }}>{this.state.quote}</p>
              <p> -{this.state.author}</p>
            </FadeIn>
          </Container>
          <Divider />
        </Container>
        <Header as="h2">Ten Tricks & Tips</Header>
        <Container text style={{ marginTop: '2em', textAlign: 'left' }}>
          <List relaxed size="big" divided bulleted>
            <List.Item>
              The use of humor is underrated. It keeps an audience tuned in. But
              it needs to be good.
            </List.Item>
            <List.Item>
              Brevity is ALWAYS an advantage. Make every word count. If you
              think you have written something well in a hundred words, do it
              over in fifty.
            </List.Item>
            <List.Item>
              Assume your audience is at least as intelligent as you, the
              writer.
            </List.Item>
            <List.Item>
              Unless you are truly brilliant, always attribute wise words and
              sayings to the persons who said or wrote them first. If you aren’t
              sure of their origin, leave them out until you do.
            </List.Item>
            <List.Item>
              Write with passion and certitude (not the same thing as
              certainty), but be prepared to defend what you say with factual
              background. Otherwise, it’s just your opinion, and it may not be
              worth a damn. In your life you will read thousands of opinions
              that are not worth a damn.
            </List.Item>
            <List.Item>
              In other words, just because you (think or) write something
              doesn’t make it so, nor does it make it wrong. Back it up. And
              check your spelling.
            </List.Item>
            <List.Item>
              Stories are always preferable to a series of bullet points in a
              resume, for example. Nobody wakes up in the morning and says to
              him- or herself, “I cannot wait to read some bullet points today.”
            </List.Item>
            <List.Item>
              Use plain everyday language in virtually everything you write.
              Once in a while you can toss is a zinger, such as “assuage” or
              “conundrum” for fun, but do so sparingly unless you want to be
              labeled by your editor as a “putz.”
            </List.Item>
            <List.Item>
              There is no substitute for knowing your subject, especially when
              the subject is yourself, as in a college admittance essay. Readers
              of such essays respond well to writers who convey that admittance
              to a specific program or institution is part of a well thought out
              life plan.
            </List.Item>
            <List.Item>
              Convincing copy is always modest in it’s tone. Allowing for the
              possibility that the writer may be a flawed human being is a way
              to get the reader to relax and let the writing in. Acceptance of
              one’s views, however mild, cannot be forced down a reader’s
              throat.
            </List.Item>
            <List.Item>
              BONUS TIP: The best way to learn to write better is to READ.
            </List.Item>
          </List>
        </Container>
        <Container text style={{ marginTop: '3em', color: 'rgb(41, 41, 41)' }}>
          <Divider />
          <FadeIn>
            <p style={{ fontSize: '1.25em' }}>{this.state.quote2}</p>
            <p> -{this.state.author2}</p>
          </FadeIn>
          <Divider />
        </Container>
        <Header as="h2">Book Recommendations</Header>
        <Container text style={{ marginTop: '2em', textAlign: 'left' }}>
          <List relaxed size="big" bulleted>
            <List.Item>The Elements of Style, by Strunk & White</List.Item>
            <List.Item>On Writing Well, by William Zinsser</List.Item>
            <List.Item>
              Wilson Follett’s Modern American Usage, A Guide edited by Jacques
              Barzun
            </List.Item>
          </List>
        </Container>
        <Container text style={{ marginTop: '3em', color: 'rgb(41, 41, 41)' }}>
          <Divider />
          <FadeIn>
            <p style={{ fontSize: '1.25em' }}>{this.state.quote3}</p>
            <p> -{this.state.author3}</p>
          </FadeIn>
          <Divider />
        </Container>
        <Header as="h2">Author Recommendations</Header>
        <Container style={{ marginTop: '2em' }}>
          <Card.Group centered>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/E._B._White">
              <Image
                rounded
                src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzI0MzU3NjQ2/e-b-white-9529308-1-402.jpg"
              />
              <Card.Content>
                <Card.Header>E. B. White</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Bill_Bryson">
              <Image
                rounded
                src="http://static.tvtropes.org/pmwiki/pub/images/bill_bryson_9628.jpg"
              />
              <Card.Content>
                <Card.Header>Bill Bryson</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.m.wikipedia.org/wiki/Joan_Didion">
              <Image
                rounded
                src="https://www.out.com/sites/out.com/files/2017/10/17/joan-didion-750.jpg"
              />
              <Card.Content>
                <Card.Header>Joan Didion</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/James_Baldwin">
              <Image
                rounded
                src="https://www.biography.com/.image/t_share/MTQ1MTQwNzU2NDcyOTMxODA5/james-baldwin---troubled-childhood.jpg"
              />
              <Card.Content>
                <Card.Header>James Baldwin</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://wallacestegner.org/bio.html">
              <Image
                rounded
                src="https://www.theparisreview.org/il/86519015ae/large/Wallace-Stegner.jpg"
              />
              <Card.Content>
                <Card.Header>Wallace Stegner</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/John_Edgar_Wideman">
              <Image
                rounded
                src="https://www.carnegielibrary.org/wp-content/uploads/2017/10/Wideman.png"
              />
              <Card.Content>
                <Card.Header>John Edgar Wideman</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Toni_Morrison">
              <Image
                rounded
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Toni_Morrison_2008-2.jpg/800px-Toni_Morrison_2008-2.jpg"
              />
              <Card.Content>
                <Card.Header>Toni Morrison</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Zora_Neale_Hurston">
              <Image
                rounded
                src="https://cdn.face2faceafrica.com/www/wp-content/uploads/2018/01/zora-neale-hurston.jpg"
              />
              <Card.Content>
                <Card.Header>Zora Neale Hurston</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/William_Saroyan">
              <Image
                rounded
                src="https://pbs.twimg.com/profile_images/1974619131/saroyan2sq_400x400.jpg"
              />
              <Card.Content>
                <Card.Header>William Saroyan</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="http://www.steinbeck.org/about-john/biography/">
              <Image
                rounded
                src="https://www.theparisreview.org/il/c625e7c0b9/large/JohnSteinbeck-thumb.jpg"
              />
              <Card.Content>
                <Card.Header>John Steinbeck</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Whitney_Balliett">
              <Image
                rounded
                src="https://rilm.files.wordpress.com/2016/04/whitney-balliett.jpg?w=500"
              />
              <Card.Content>
                <Card.Header>Whitney Balliett</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Ralph_Ellison">
              <Image
                rounded
                src="https://aalbc.com/author-photos/ralph-ellison.jpg"
              />
              <Card.Content>
                <Card.Header>Ralph Ellison</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Richard_Wright_(author)">
              <Image
                rounded
                src="http://atlantablackstar.com/wp-content/uploads/2014/09/RW-symphonyspace.org_.jpg"
              />
              <Card.Content>
                <Card.Header>Richard Wright</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Willa_Cather">
              <Image
                rounded
                src="http://www.marybakereddylibrary.org/wp-content/uploads/2017/01/Women-of-History_Willa_Cather_Featured_Image_800x500px.jpg"
              />
              <Card.Content>
                <Card.Header>Willa Cather</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Bront%C3%AB_family">
              <Image
                rounded
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/The_Bront%C3%AB_Sisters_by_Patrick_Branwell_Bront%C3%AB_restored.jpg/800px-The_Bront%C3%AB_Sisters_by_Patrick_Branwell_Bront%C3%AB_restored.jpg"
              />
              <Card.Content>
                <Card.Header>The Bronte Family</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Edith_Wharton">
              <Image
                rounded
                src="https://www.edithwharton.org/wp-content/uploads/2017/10/home-discover2017.jpg"
              />
              <Card.Content>
                <Card.Header>Edith Wharton</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Mary_Hunter_Austin">
              <Image
                rounded
                src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Mary_Austin_c.1900.jpg"
              />
              <Card.Content>
                <Card.Header>Mary Hunter Austin</Card.Header>
              </Card.Content>
            </Card>
            <Card link target="_blank" href="https://mfkfisher.com/">
              <Image
                rounded
                src="https://assets.marthastewart.com/styles/wmax-570/d32/MFK%20Fisher_Credit%20George%20Hurrell/MFK%20Fisher_Credit%20George%20Hurrell_sq.jpg?itok=tu2k7ptQ"
              />
              <Card.Content>
                <Card.Header>M. F. K. Fisher</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/James_Fallows">
              <Image
                rounded
                src="http://mediad.publicbroadcasting.net/p/kvpr/files/styles/x_large/public/201407/fallows.jpg"
              />
              <Card.Content>
                <Card.Header>James Fallows</Card.Header>
              </Card.Content>
            </Card>
            <Card
              link
              target="_blank"
              href="https://en.wikipedia.org/wiki/John_McPhee">
              <Image
                rounded
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/John_Mcphee.jpg/800px-John_Mcphee.jpg"
              />
              <Card.Content>
                <Card.Header>John McPhee</Card.Header>
              </Card.Content>
            </Card>
          </Card.Group>
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

export default Blog
