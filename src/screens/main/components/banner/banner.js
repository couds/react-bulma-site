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
import mascot from 'assets/images/happy-mascot.png';

import './banner.scss';
import Highlight from 'components/highlight';
import Icon from 'components/icon';
import Link from 'components/link';

const Banner = () => {
  return (
    <Hero id="banner" display="relative" size="medium" color="brand" pb={2}>
      <Hero.Body className="body" pt="6">
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
                <Columns.Column style={{ maxWidth: 500, width: '100%' }} narrow>
                  <Heading
                    size={5}
                    renderAs="h2"
                    style={{ marginBottom: '0.5rem' }}
                  >
                    <Trans>React Bulma Components</Trans>
                  </Heading>
                  <Heading size={2} renderAs="h1">
                    <Trans>Use Bulma on your React projects with ease</Trans>
                  </Heading>
                  <Block style={{ height: 49 }}>
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
                        width="140"
                        height="20"
                        alt="downloads per month"
                        src="https://img.shields.io/npm/dm/react-bulma-components.svg"
                      />
                    </Block>
                    <Block
                      renderAs="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.npmjs.com/package/react-bulma-components"
                      className="badge"
                    >
                      <img
                        width="94"
                        height="20"
                        alt="downloads per month"
                        src="https://img.shields.io/github/release/couds/react-bulma-components.svg"
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
                      className="btn-storybook"
                      renderAs={Link}
                      to="/storybook"
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
          </Columns>
        </Container>
      </Hero.Body>
      <Container display="relative" style={{ width: '100%' }}>
        <Image alt="mascot" src={mascot} size={128} className="mascot" />
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
