import React from 'react';
import Layout from 'components/layout';
import {
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

const Banner = () => {
  return (
    <Hero
      className="banner"
      display="relative"
      size="medium"
      color="brand"
      gradient
      pb={2}
    >
      <Hero.Header>
        <Layout.Navbar />
      </Hero.Header>
      <Hero.Body>
        <Container>
          <Columns>
            <Columns.Column
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <Heading renderAs="h1">React Bulma Component</Heading>
              <Heading size={3} renderAs="h2" subtitle>
                <Trans>
                  The React wrapper for <b>Bulma</b> that we always wanted
                </Trans>
              </Heading>
              <Element display="flex">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.npmjs.com/package/react-bulma-components"
                  className="badge"
                >
                  <img
                    alt="downloads per month"
                    src="https://img.shields.io/npm/dm/react-bulma-components.svg"
                  />
                </a>
                <iframe
                  title="github-stars"
                  className="badge"
                  src="https://ghbtns.com/github-btn.html?user=couds&repo=react-bulma-components&type=star&count=true&size=medium"
                />
              </Element>
            </Columns.Column>
            <Columns.Column justifyContent="center" display="flex">
              <video controls>
                <source src="https://cdn.videvo.net/videvo_files/video/free/2013-07/small_watermarked/hd0051_preview.webm" />
              </video>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
      <Container
        touch={{ display: 'hidden' }}
        display="relative"
        style={{ width: '100%' }}
      >
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
