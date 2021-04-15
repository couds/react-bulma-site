import React from 'react';
import {
  Block,
  Button,
  Columns,
  Container,
  Element,
  Heading,
  Hero,
  Image,
} from 'react-bulma-components';
import { Trans } from '@lingui/macro';
import mascot from 'assets/images/happy-mascot.webp';

import './banner.scss';
import Highlight from 'components/highlight';
import Icon from 'components/icon';
import Link from 'components/link';

const Banner = () => {
  return (
    <Hero id="banner" display="relative" size="medium" color="brand" pb={2}>
      <Hero.Body className="body">
        <Container>
          <Columns centered>
            <Columns.Column
              alignItems="center"
              justifyContent="center"
              display="flex"
              narrow
            >
              <Icon name="logo" size="auto" className="logo" />
            </Columns.Column>
            <Columns.Column
              justifyContent="center"
              display="flex"
              flexDirection="column"
              narrow
            >
              <Columns breakpoint="mobile" centered>
                <Columns.Column
                  textAlign="center"
                  style={{ maxWidth: '100%' }}
                  narrow
                >
                  <Heading size={2} renderAs="h1">
                    React Bulma Components
                  </Heading>
                  <Heading size={5} renderAs="h2">
                    <Trans>
                      The React wrapper for <b>Bulma</b> that we always wanted
                    </Trans>
                  </Heading>
                  <Block style={{ height: 49, maxWidth: 500 }}>
                    <Highlight language="bash">
                      npm i --save react-bulma-components
                    </Highlight>
                  </Block>
                  <Element display="flex" className="is-centered-touch">
                    <Block
                      renderAs="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.npmjs.com/package/react-bulma-components"
                      className="badge"
                    >
                      <img
                        alt="downloads per month"
                        src="https://img.shields.io/npm/dm/react-bulma-components.svg"
                      />
                    </Block>
                    <Block
                      renderAs="iframe"
                      title="github-stars"
                      className="badge"
                      src="https://ghbtns.com/github-btn.html?user=couds&repo=react-bulma-components&type=star&count=true&size=medium"
                    />
                  </Element>
                  <Button.Group className="is-centered-touch">
                    <Button
                      color="brand"
                      inverted
                      renderAs={Link}
                      to="/getting-started/"
                    >
                      <Icon name="books" />
                      <span>
                        <Trans>First Steps</Trans>
                      </span>
                    </Button>
                    <Button
                      color="transparent"
                      renderAs="a"
                      className="btn-storybook"
                      href="https://couds.github.io/react-bulma-components/"
                      target="_blank"
                    >
                      <Icon name="storybook" />
                      <span>
                        <Trans>Storybook Demo</Trans>
                      </span>
                    </Button>
                  </Button.Group>
                </Columns.Column>
              </Columns>
            </Columns.Column>
            <Columns.Column
              display="hidden"
              mobile={{ display: 'hidden' }}
              justifyContent="center"
            >
              <iframe
                src="https://player.vimeo.com/video/237784510?title=0&byline=0&portrait=0"
                title="bulma-intro"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                width="640"
                height="360"
                style={{ width: '100%', minHeight: 180 }}
              />
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
      <Container display="relative" style={{ width: '100%' }}>
        <Image src={mascot} size={128} className="mascot" />
      </Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        className="bottom"
      >
        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff" />
      </svg>
    </Hero>
  );
};

export default Banner;
