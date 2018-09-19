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

class HomePage extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false
  }

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state

    return (
      <div>
        <style>{`
          html, body {
            background: #fff;
          }
        `}</style>

        <Container text>
          <Image
            centered
            style={{ margin: 'auto' }}
            size="medium"
            src="https://pre00.deviantart.net/d656/th/pre/i/2004/130/d/6/quill_and_ink.jpg"
          />
          <Header as="h1">Bay Area Writing Coach</Header>
          {/* <p>Editing | Something | Consulting</p> */}
        </Container>

        <Container text>
          <Container
            text
            style={{ fontSize: '1.2em', marginTop: '4em' }}
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

          <Container style={{ marginTop: '5em', marginBottom: '5em' }} vertical>
            <Grid divided columns="equal" stackable>
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
        </Container>
      </div>
    )
  }
}

export default HomePage
