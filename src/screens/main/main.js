import React from 'react';
import { Heading, Container, Block } from 'react-bulma-components';
import { Trans } from '@lingui/macro';
import Icon from 'components/icon';
import responsivePng from 'assets/images/code/responsive.png';
import modularPng from 'assets/images/code/modular.png';
import Banner from './components/banner';
import Example from './components/example';
import Feature from './components/feature';
import ColumnsExample from './components/columns-example';

const Main = () => {
  return (
    <>
      <Banner />
      <Container renderAs={Block} my="6" max breakpoint="widescreen" px={5}>
        <Container my={6} renderAs={Block}>
          <Heading renderAs="h2" size={3}>
            <Trans>
              The React wrapper for <b>Bulma</b> that we always wanted
            </Trans>
          </Heading>
          <Heading subtitle size={4}>
            <Trans>
              React-Bulma-Components is a library that will allow you to easily
              use all capabilities of CSS Bulma Framework using components in a
              declarative way.
            </Trans>
          </Heading>
        </Container>
        <Container>
          <Example />
        </Container>
      </Container>
      <Feature color="brand" image={responsivePng}>
        <Heading size={4}>
          <Icon name="responsive-design" text /> <Trans>Responsive</Trans>
        </Heading>
        <Heading subtitle size={5}>
          <Trans>
            Use a clear and declarative way how you want the layout to be on{' '}
            each <b>breakpoint</b> the each breakpoint property. Define Size,
            Offset, and other properties per breakpoint without any css.
          </Trans>
        </Heading>
      </Feature>
      <Feature image={modularPng} reverse>
        <Heading size={4}>
          <Icon color="primary" name="cubes" text />{' '}
          <Trans>Fast & Modular</Trans>
        </Heading>
        <Heading subtitle size={5}>
          <Trans>
            Include only components that you need reducing the size of your
            final bundle out of the box. With almost{' '}
            <b>no external dependncies</b> each component renders really fast.
          </Trans>
        </Heading>
      </Feature>
      <Container renderAs={Block} my="6">
        <ColumnsExample />
      </Container>
    </>
  );
};

export default Main;
